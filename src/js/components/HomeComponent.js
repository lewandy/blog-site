import { getTemplate } from "../utils/template";
import { initWebSocket } from "../utils/webSockets"
import DomJs from "../utils/dom"

export default class HomeComponent extends HTMLElement {
   static name = "home-component";
   templateUri = '/templates/home.html'

   constructor() {
      super();

      //TODO: Refactor this
      if (!window.localStorage.getItem('_token')) {
         window.app.router.goToRoute("/login");
      }

      this.render();

      //Open connection with websocket protocol
      //initWebSocket(window.WS_URI);
   }

   connectedCallback() {
      this.addEventListener("post_like", (e) => {
         //TODO : When websocket emmit a event
         console.log(e)
      })
   }

   disconnectedCallback() {
      console.log("Se quito home componente")
   }

   addListeners() {
      DomJs.onClick('btn-logout', (e) => {
         e.preventDefault();

         localStorage.removeItem('_token');
         window.app.router.goToRoute("/login");
      });
   }

   async render() {
      const template = await getTemplate(this.templateUri);
      this.innerHTML = template;

      let postsComponent = document.createElement("posts-component");
      let routeView = document.getElementsByTagName("router-view")[0];
      routeView.appendChild(postsComponent);

      this.addListeners();
   }
}