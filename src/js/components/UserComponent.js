export default class UserComponent extends HTMLElement {
   static name = "user-component";

   constructor() {
      super();
   }

   connectedCallback() {
      this.render();
   }

   async render() {
      let user;
      let userId = Number(window.location.pathname.match(/\d/));
      if (userId == 0) {
         userId = JSON.parse(localStorage.getItem("_user")).id;
         user = await blog.services.User.getUser(userId);
      }else{
         user = await blog.services.User.getUser(userId);
      }

      this.innerHTML = `
         <div class="card mb-3 mt-4">
         <img src="https://picsum.photos/50/50" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${ user.name }</h5>
               <p class="card-text">El usuario tiene ${user.posts} posts.</p>
               <p class="card-text"><small class="text-muted">${ user.email }</small></p>
            </div>
         </div>
      `;
   }
}