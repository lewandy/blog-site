import App from "../core/app";
import Router from "../core/router";
import { TheAsideComponent, TheFooterComponent, TheHeaderComponent } from "./components/layout"
import PostsComponent from "./components/PostsComponent";

export default class BlogApp extends App {
   router = null;

   constructor(configuration) {
      super([
         TheFooterComponent,
         TheHeaderComponent, 
         TheAsideComponent,
         PostsComponent
      ]);

      this.router = new Router({ routes: configuration.routes });
      window.app = this;
   }
}