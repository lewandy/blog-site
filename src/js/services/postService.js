import Http from "../utils/http"

export default class postService {
   constructor() {
      //Empty constructor
      this.http = new Http();
   }

   /**
    * Return the posts
    */
   async getPosts() {
      let posts = await this.http.Get('post');
      return posts;
   }

   async registerPost(data) {
      let post = await this.http.Post(`post`,data);
      return post;
   }

   async getPost(id) {
      let post = await this.http.Get(`post/${id}`);
      return post;
   }

   putComment(id, body) {
      let response = this.http.Post(`post/${id}/comment`, body);
      return response;
   }

   async getComments(id) {
      let response = await this.http.Get(`post/${id}/comment`);
      return response;
   }

   putLike(postId, target) {
      let liked = target.getAttribute("data-liked");

      if (liked == "true") {
         this.http.Delete(`post/${postId}/like`);
      } else {
         this.http.Put(`post/${postId}/like`);
      }
   }


}