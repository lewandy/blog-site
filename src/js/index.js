import './env';
import '../css/custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

import routes from "./routes/routes"
import BlogApp from './app';

import { TheHeader,TheFooter } from "./components/layout";

let layoutComponents = [
   TheHeader,
   TheFooter
]

new BlogApp({
   components: layoutComponents,
   routes
});




