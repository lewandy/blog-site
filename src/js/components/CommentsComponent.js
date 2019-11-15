export default class CommentsComponent extends HTMLElement {
   static name = "comments-component";
   postId = null;
   service = null;

   constructor() {
      super();

      this.service = window.blog.services.Post;
      this.postId = this.getAttribute("data-post-id");
   }

   connectedCallback() {
      console.log('connected!');

      this.render();
   }

   disconnectedCallback() {
      console.log('disconnected!');
   }

   attributeChangedCallback(name, oldVal, newVal) {
      console.log(`Attribute: ${name} changed!`);
   }

   adoptedCallback() {
      console.log('adopted!');
   }

   static get observedAttributes() {
      return ['data-post-id'];
   }

   postComments() {
      let form = document.getElementById("frm-comment");
      form.onsubmit = async (e) => {
         e.preventDefault();
         let { target } = e;

         let payload = target[0].value;

         if (!payload) {
            alert("La caja de comentarios esta vacia!");
            return;
         }

         await this.service.putComment(this.postId, { body: payload });

         this.render();
      }
   }

   async render() {
      let comments = await this.service.getComments(this.postId);
      let commentsHtml = "";

      comments.forEach(comment =>
         commentsHtml += `<div class="media mb-4">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
               <h5 class="mt-0">${ comment.userName}</h5>
               ${comment.body}.
            </div>
         </div>
      `
      );

      let html = `
         <div class="card my-4">
            <h5 class="card-header">Escribir comentario:</h5>
            <div class="card-body">
               <form id="frm-comment">
                  <div class="form-group">
                     <textarea class="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Comentar</button>
               </form>
            </div>
         </div>
         ${ commentsHtml}
      `;

      this.innerHTML = html;
      this.postComments();
   }
}