import LoginComponent from "../components/LoginComponent";
import HomeComponent from "../components/HomeComponent"
import PostComponent from "../components/PostComponent"
import UserComponent from "../components/UserComponent"
import WriteComponent from "../components/WriteComponent"

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
      path: '/home',
      component: HomeComponent,
      main: true
   },
   {
      name: 'post-component',
      path: /(\/posts\/\d+)/,
      component: PostComponent,
      parent: HomeComponent
   },
   {
      name: 'user-component',
      path: /(\/user(\/\d+)?)/,
      component: UserComponent,
      parent: HomeComponent
   },
   {
      name: 'write-component',
      path: '/write',
      component: WriteComponent,
      parent: HomeComponent
   }
]

export default routes;