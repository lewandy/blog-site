export default class HomeComponent extends HTMLElement {

   constructor() {
      super();

      if (!window.localStorage.getItem('user')) {
         window.location.hash = '/login';
      }
   }

   connectedCallback() {

      //This is for demostrative purposes :}
      this.innerHTML = "<h1> Home component </h1> <button>Salir</button>"

      this.lastChild.addEventListener('click', (e) => {
         localStorage.removeItem('user');
         window.location.hash = '/login';
      })
   }
}