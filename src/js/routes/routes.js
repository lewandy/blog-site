import LoginComponent from "../components/LoginComponent";
import HomeComponent from "../components/HomeComponent"
import PostComponent from "../components/PostComponent"

const routes = [
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
   {
      name: 'post-component',
      path: '/posts/{id}',
      component: PostComponent
   }
]

export default routes;