import { getTemplate } from "../utils/template";
import PostService from "../services/postService"
import { initWebSocket } from "../utils/webSockets"
import DomJs from "../utils/dom"

export default class HomeComponent extends HTMLElement {
   static name = "home-component";
   templateUri = './templates/home.html'

   constructor() {
      super();
      this.postService = new PostService();

      if (!window.localStorage.getItem('_token')) {
         window.location.hash = '/login';
      }

      this.render();

      //Open connection with websocket protocol
      initWebSocket(window.WS_URI);
   }

   /**
    * Esto pasa cuando se conecta al DOM
    */
   connectedCallback() {
      this.addEventListener("post_like", (e) => {
         //TODO : When websocket emmit a event
         console.log(e)
      })
   }

   disconnectedCallback(){

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
            .replace(/@POST_ID/g, post.id)
            .replace("@POST_TITLE", post.title)
            .replace("@POST_SUMMARY", post.body)
            .replace("@POST_DATE", post.createdAt)
            .replace("@USER", post.userName)
            .replace("@LIKES", post.likes)
            .replace("@TAGS", this.getTagsHtml(post))
            .replace("@COMMENTS", post.comments)
            .replace("@VIEWS", post.views);

         postsListHtml += temp;
         temp = "";
      }

      postListContainer.innerHTML = postsListHtml;

      this.putButtonsLikeEvent();
   }

   async getPostTemplate() {
      let template = await getTemplate('../templates/singlePost.html');
      return template;
   }

   putButtonsLikeEvent() {
      let buttons = document.getElementsByClassName("btn-like");
   }

   onButtonLikeClick(e) {
      console.log(e.target);
   }

   getTagsHtml(post) {
      let tags = "";
      for (let tag of post.tags) {
         tags += `<a href="#" class="badge badge-secondary mr-1">${tag}</a>`;
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