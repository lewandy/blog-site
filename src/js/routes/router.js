export default class Router {
   routes = []
   nodeId = 'app'

   constructor(config) {
      this.routes = config.routes;

      this.defineComponents();
      this.loadDefault();
      this.onRouteChanged();

      window.router = this;
   }

   /**
    * Define and register all components and routes
    */
   defineComponents() {
      for (let route of this.routes) {
         customElements.define(route.name, route.component);
      }
   }

   /**
    * This is triggered when the hash route is changed
    */
   onRouteChanged() {
      window.addEventListener('hashchange', e => {
         //TODO: This will be refactored
         let newUri = e.newURL.substr(e.newURL.indexOf('#') + 1, e.newURL.length);

         let route = this.routes.find(route => route.path == newUri);

         if (route) {
            let appContainer = document.getElementById('app');
            let componentNode = document.createElement(route.name);

            appContainer.innerHTML = "";
            appContainer.appendChild(componentNode);
         } else {
            console.error("This route not exists");
         }
      });
   }

   /**
    * Verify default route
    * @param { Array } routes 
    */
   loadDefault() {
      let defaultRoute = this.routes.filter(route => route.default);

      if (defaultRoute) {
         this.natigateTo(defaultRoute[0]['path'])
      } else {
         throw new Error("Default router not provided to the router")
      }
   }

   static getParams(){
      let newUri = e.newURL.substr(e.newURL.indexOf('#') + 1, e.newURL.length);

      //TODO: add feature of mixins params
      let params = /{[0-9]+}/.test(newUri);
   }

   /**
    * Go to especific route
    * @param { String } uri 
    * @param { Object } params 
    */
   natigateTo(uri, params) {
      if (params) {
         //TODO: do stuff if parameters
      }

      let route = this.routes.find(route => route.path == uri);

      if (route) {
         let appContainer = document.getElementById('app');
         let componentNode = document.createElement(route.name);

         appContainer.innerHTML = "";
         appContainer.appendChild(componentNode);

         window.location.hash = uri;
      } else {
         console.error("This route not exists");
      }
   }
}