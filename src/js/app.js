import App from "../core/app";
import Router from "../core/router";

export default class BlogApp extends App {
   router = null;

   constructor(configuration) {
      super(configuration.components)

      this.router = new Router({ routes: configuration.routes });
      window.app = this;
   }
}