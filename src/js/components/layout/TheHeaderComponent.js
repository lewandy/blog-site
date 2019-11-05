
export class TheHeader extends HTMLElement {
   static name = "header-component"

   constructor(){
      super();
   }

   connectedCallback(){
      this.innerHTML = "My html";
   }
}