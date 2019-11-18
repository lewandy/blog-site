import Service from "../services/postService"

export default class WriteComponent extends HTMLElement {
   static name = "write-component"

   constructor() {
      super();
   }

   connectedCallback() {
      this.render();

      let btn = document.getElementById("btn-register").onclick = () => {
         let title = document.getElementById("input-title").value;
         let tags = document.getElementById("input-tags").value;
         let body = document.getElementById("input-body").value;

         let tagsList = tags.split(",");

         let data = {
            title: title,
            tags: tagsList,
            body: body
         }
         try {
            window.blog.services.Post.registerPost(data);
            window.blog.router.goToRoute("/home");
         } catch (error) {
            console.log(error);
         }
      };
   }

   render() {
      this.innerHTML = `
         <div class="mt-4">
            <div class="form-group">
               <label for="exampleFormControlTextarea1">Titulo</label>
               <input class="form-control" id="input-title"></input>
               <label for="exampleFormControlTextarea1">Tags</label>
               <input class="form-control" id="input-tags"></input>
               <label for="exampleFormControlTextarea1">Cuerpo</label>
               <textarea class="form-control" id="input-body" rows="3"></textarea>
            </div>
            <button id="btn-register" class="btn btn-primary">Aceptar</button>
         </div>
      `;
   }
}