
export default class TheHeaderComponent extends HTMLElement {
   static name = "header-component"

   constructor() {
      super();
   }

   connectedCallback() {
      this.innerHTML = this.render();
   }

   render() {
      return `
      <!-- Navigation -->
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
               <a class="navbar-brand" href="#">BlogSPA</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item active">
                        <a class="nav-link" onclick="blog.router.goToRoute('/home');" style="cursor: pointer;">Inicio
                           <span class="sr-only">(current)</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" onclick="blog.router.goToRoute('/user');" style="cursor: pointer;">Perfil</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" onclick="blog.router.goToRoute('/write');" style="cursor: pointer;">Crear</a>
                     </li>
                     <li class="nav-item">
                        <a id="btn-logout" class="nav-link" href="#">Salir</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      `;
   }
}