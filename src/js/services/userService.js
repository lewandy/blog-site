import Http from "../utils/http"

export default class userService {
   constructor(){
      //Empty constructor
      this.http = new Http();
   }

   async getUser(id){
      let data = await this.http.Get("users/"+id)
      return data;
   }
}