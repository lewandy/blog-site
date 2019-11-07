import LoginComponent from "../components/LoginComponent";
import HomeComponent from "../components/HomeComponent"
import PostComponent from "../components/PostComponent"

const routes = [
   {
      name: 'login-component',
      path: '/login',
      component: LoginComponent,
      initial: true,
      main: true
   },
   {
      name: 'home-component',
      path: '/posts',
      component: HomeComponent,
      main: true
   },
   {
      name: 'post-component',
      path: /(\/posts\/\d+)/,
      component: PostComponent,
      parent: HomeComponent
   }
]

export default routes;