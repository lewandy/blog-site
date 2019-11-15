export default class WriteComponent extends HTMLElement {
   static name = "write-component"

   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = this.render();
   }

   render() {
      return `
         <div class="mt-4">
            <div class="form-group">
               <label for="exampleFormControlTextarea1">Titulo</label>
               <input class="form-control" id="input-title"></input>
               <label for="exampleFormControlTextarea1">Tags</label>
               <input class="form-control" id="input-tags"></input>
               <label for="exampleFormControlTextarea1">Cuerpo</label>
               <textarea class="form-control" id="input-body" rows="3"></textarea>
            </div>
            <button class="btn btn-primary">Aceptar</button>
         </div>
      `;
   }
}