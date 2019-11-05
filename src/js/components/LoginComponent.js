import { getTemplate } from "../utils/template";
import DomJs from "../utils/dom"
import Auth from "../services/authService"

export default class LoginComponent extends HTMLElement {
   static name = "login-component";
   templateUri = './templates/login.html'

   constructor() {
      super();
      this.auth = new Auth();

      //This will be refactored
      if (window.localStorage.getItem('_token')) {
         window.location.hash = '/posts';
      } else {
         this.render();
      }
   }

   connectedCallback() {
      //TODO : Do something when the component is mounted in the DOM.
   }

   disconnectedCallback(){
      //TODO: Remove all event listeners
   }

   /**
    * Add event listerers and other things
    */
   setup() {
      DomJs.onSubmit('login-frm', (e) => {
         e.preventDefault();

         let email = DomJs.val('inputEmail');
         let password = DomJs.val('inputPassword');

         try {
            this.auth
               .authenticate({ email, password })
               .then(res => {
                  localStorage.setItem('_token', res.token);

                  window.location.hash = "/posts";
               })
               .catch(err => {
                  console.log(err);
                  DomJs.removeClass('login-alert', 'hide-element')
               })
         } catch (error) {
            console.log(error);
         }
      });

      DomJs.onSubmit('register-frm', (e) => {
         e.preventDefault();
         e.stopPropagation();

         let name = DomJs.val('name');
         let email = DomJs.val('email');
         let password = DomJs.val('password');
         let confirmPassword = DomJs.val('confirm-password');

         if (password !== confirmPassword)
            alert("Las contraseñas no coinciden");

         this.auth.register({ email, password, name })
            .then(response => {
               if (response) {
                  this.showLoginForm();
               }
            }).catch(() => {
               alert("Datos invalidos!");
            })
      })

      DomJs.onClick('btn-dismiss-alert', () => {
         DomJs.addClass('login-alert', 'hide-element')
      })

      DomJs.onClick('show-register', (e) => {
         e.preventDefault();
         DomJs.addClass('form-login', 'hide-element');
         DomJs.removeClass('form-register', 'hide-element');
      })
      DomJs.onClick('btn-cancel', (e) => {
         e.preventDefault();

         DomJs.removeClass('form-login', 'hide-element');
         DomJs.addClass('form-register', 'hide-element');
      })
   }

   showRegisterForm() {
      DomJs.addClass('form-login', 'hide-element');
      DomJs.removeClass('form-register', 'hide-element');
   }

   showLoginForm() {
      DomJs.removeClass('form-login', 'hide-element');
      DomJs.addClass('form-register', 'hide-element');
   }

   /**
    * Get base template from templates folder and set the innerHtml of the current component with it.
    */
   async render() {
      const template = await getTemplate(this.templateUri);
      this.innerHTML = template;
      this.setup();
   }

}
