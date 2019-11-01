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
      path: '/posts',
      component: HomeComponent
   },
   // {
   //    name: 'home-component',
   //    path: '/posts',
   //    component: HomeComponent
   // }
]