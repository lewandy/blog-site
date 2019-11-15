import App from "../core/app";
import Router from "../core/router";
import routes from "./routes/routes"

import { TheAsideComponent, TheFooterComponent, TheHeaderComponent } from "./components/layout"
import PostsComponent from "./components/PostsComponent";
import CommentsComponent from "./components/CommentsComponent";

//Services to be injected
import PostService from "./services/postService";
import AuthService from "./services/authService"
import UserService from "./services/userService"

export default class BlogApp extends App {
   router = null;

   constructor() {
      super(
         TheFooterComponent,
         TheHeaderComponent,
         TheAsideComponent,
         PostsComponent,
         CommentsComponent
      );

      this.router = new Router({ routes });

      this.configureServices();

      window.blog = this;
   }

   /**
    * App services
    */
   get services() {
      return this.serviceContainer.services;
   }

   /**
    * Register services to the service container to be use globally 
    */
   configureServices() {
      this.serviceContainer.register("Post", new PostService());
      this.serviceContainer.register("Auth", new AuthService());
      this.serviceContainer.register("User", new UserService());
   }
}