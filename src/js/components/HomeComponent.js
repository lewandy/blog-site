import { getTemplate } from "../utils/template";
import PostService from "../services/postService"
import Auth from "../services/authService"
import DomJs from "../utils/dom"

export default class HomeComponent extends HTMLElement {
   templateUri = './templates/home.html'

   constructor() {
      super();
      this.postService = new PostService();

      if (!window.localStorage.getItem('_token')) {
         window.location.hash = '/login';
      }

      this.render();
   }

   /**
    * Esto pasa cuando se conecta al DOM
    */
   connectedCallback() {
      console.log("Home component is connected");

   }

   addListeners() {
      DomJs.onClick('btn-logout', (e) => {
         e.preventDefault();

         localStorage.removeItem('_token');
         window.location.hash = '/login';
      });
   }

   /**
    * Render posts in the views
    */
   async renderPosts() {
      let posts = await this.postService.getPosts();

      let postListContainer = document.getElementById('posts-list');
      let singlePostTemplate = await this.getPostTemplate();
      let postsListHtml = "";

      //Replace variables
      for (let post of posts) {
         let temp = singlePostTemplate
            .replace("@POST_TITLE", post.title)
            .replace("@POST_SUMMARY", post.body)
            .replace("@POST_DATE", post.createdAt)
            .replace("@USER", post.userName)
            .replace("@LIKES", post.likes)
            .replace("@TAGS", this.getTagsHtml(post))
            .replace("@COMMENTS", post.comments);

         postsListHtml += temp;
         temp = "";
      }

      postListContainer.innerHTML = postsListHtml;
   }

   async getPostTemplate() {
      let template = await getTemplate('../templates/singlePost.html');
      return template;
   }

   getTagsHtml(post) {
      let tags = "";
      for (let tag of post.tags) {
         tags += `<a href="#" class="badge badge-primary mr-1">${tag}</a>`;
      }
      return tags;
   }

   /**
    * Get base template from templates folder and set the innerHtml of the current component with it.
    */
   async render() {
      const template = await getTemplate(this.templateUri);
      this.innerHTML = template;

      this.addListeners();

      //Load posts
      await this.renderPosts();
   }
}