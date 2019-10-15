import LoginComponent from "../components/LoginComponent";
import HomeComponent from "../components/HomeComponent"

export default [
   {
      name: 'login-component',
      path: '/login',
      component: LoginComponent,
      default: true
   },
   {
      name: 'home-component',
      path: '/blog',
      component: HomeComponent
   }
]