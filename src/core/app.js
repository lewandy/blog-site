import { register } from "./lib/component";

/**
 * Provide main features to the application
 */
export default class App {
   components = [];

   /**
    * instantiate new app
    * @param { Array<HTMLElement> } components 
    * @param { Array } routes 
    */
   constructor(globalComponents) {
      register(globalComponents);
   }
}
