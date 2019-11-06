export default class TheFooterComponent extends HTMLElement {
   static name = "footer-component";

   constructor() {
      super();

   }

   connectedCallback() {
      this.innerHTML = this.render();
   }

   render() {
      return `
      <footer class="py-5 bg-dark">
         <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
         </div>
         <!-- /.container -->
      </footer>
      `;
   }
}