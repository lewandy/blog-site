export default class RouterView extends HTMLElement {
   static name = "router-view";

   constructor() { 
      super(); 
   }

   connectedCallback() {
      // this.innerHTML = "Aqui va contenido dinamico";
   }

   disconnectedCallback() {

   }

   attributeChangedCallback(attrName, olValue, newValue) {
      
   }

   /**
    * Render a view depends of component that will be mounted...
    */
   render(name) {

   }
}