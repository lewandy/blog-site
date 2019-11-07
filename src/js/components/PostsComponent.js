import PostService from "../services/postService"
import { getTemplate } from "../utils/template";


export default class PostsComponent extends HTMLElement {
   static name = "posts-component"

   constructor() {
      super();

      this.postService = new PostService();
   }

   connectedCallback() {
      this.renderPosts();
      this.addEventListener("post_like", (e) => {
         //TODO : When websocket emmit a event
         console.log(e)
      })
   }

   async getPostTemplate() {
      let template = await getTemplate('/templates/singlePost.html');
      return template;
   }

   getTagsHtml(post) {
      let tags = "";
      for (let tag of post.tags) {
         tags += `<a href="#" class="badge badge-secondary mr-1">${tag}</a>`;
      }
      return tags;
   }

   /**
    * Render posts in the views
    */
   async renderPosts() {
      const template = `
      <h1 class="my-4">Publicaciones
            <small>Hoy</small>
         </h1>

         <div class="" id="posts-list">
            <div class="progress">
               <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
            </div>
         </div>
      `;
      this.innerHTML = template;

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



   putButtonsLikeEvent() {
      let buttons = document.getElementsByClassName("btn-like");
   }

   onButtonLikeClick(e) {
      console.log(e.target);
   }
}