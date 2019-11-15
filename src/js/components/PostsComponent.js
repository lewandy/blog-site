import { getTemplate } from "../utils/template";
import moment from "moment"


export default class PostsComponent extends HTMLElement {
   static name = "posts-component"

   constructor() {
      super();
   }

   connectedCallback() {
      this.renderPosts();
      this.addEventsLinsteners();
   }

   addEventsLinsteners() {
      document.addEventListener("likes", this.onLikes);
      document.addEventListener("view-post", this.onViewPost)
      document.addEventListener("new-comment", this.onCommentPost)
   }

   disconnectedCallback() {
      this.removeEventsListeners();
   }

   removeEventsListeners() {
      document.removeEventListener("likes", this.onLikes);
      document.removeEventListener("view-post", this.onViewPost);
      document.removeEventListener("new-comment", this.onCommentPost)
   }

   onLikes({ detail }) {
      let btn = document.getElementById(`btn-like-${detail.postId}`);

      if (detail.likeType == "like") {
         btn.setAttribute("data-liked", "true");


         btn.classList.remove("btn-secondary");
         btn.classList.add("btn-primary");
      } else {
         btn.setAttribute("data-liked", "false");

         btn.classList.remove("btn-primary");
         btn.classList.add("btn-secondary");
      }
   }

   onViewPost({ detail }) {
      try {
         let btn = document.getElementById(`btn-view-${detail.postId}`);
         btn.getElementsByTagName("span")[0].textContent = detail.views;
      } catch (error) {
         
      }
   }

   onCommentPost({ detail }) {
      let btn = document.getElementById(`btn-comment-${detail.postId}`);
      btn.getElementsByTagName("span")[0].textContent = detail.comments;
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

      let posts = await window.blog.services.Post.getPosts();

      let postListContainer = document.getElementById('posts-list');
      let singlePostTemplate = await this.getPostTemplate();
      let postsListHtml = "";

      //Replace variables
      for (let post of posts) {
         let temp = singlePostTemplate
            .replace(/@POST_ID/g, post.id)
            .replace("@POST_TITLE", post.title)
            .replace(/@LIKED/g, post.liked)
            .replace("@POST_SUMMARY", post.body)
            .replace("@POST_DATE", moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a'))
            .replace("@USER", post.userName)
            .replace("@US_ID",post.userId)
            .replace("@LIKES", post.likes)
            .replace("@TAGS", this.getTagsHtml(post))
            .replace("@COMMENTS", post.comments)
            .replace("@VIEWS", post.views);

         postsListHtml += temp;
         temp = "";
      }

      postListContainer.innerHTML = postsListHtml;

      let buttons = document.getElementsByClassName("btn-like");
      buttons.forEach(button => {
         if (button.getAttribute("data-liked") == "true") {
            button.classList.remove("btn-secondary");
            button.classList.add("btn-primary");
         } else {
            button.classList.remove("btn-primary");
            button.classList.add("btn-secondary");
         }
      });
   }
}