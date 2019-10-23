import Http from "../utils/http"

export default class postService {
   constructor(){
      //Empty constructor

      this.http = new Http();
   }

   /**
    * Return the posts
    */
   async getPosts(){
      let posts = await this.http.Get('post');
      return posts;
   }
}