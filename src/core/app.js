import { register } from "./lib/component";
import ServiceContainer from "./serviceContainer"

/**
 * Provide main features to the application
 */
export default class App {
   components = [];

   /**
    * @type { ServiceContainer }
    */
   serviceContainer = null;

   /**
    * instantiate new app
    * @param { Array<HTMLElement> } components 
    * @param { Array } routes 
    */
   constructor(...globalComponents) {
      register(globalComponents);

      this.serviceContainer = new ServiceContainer();
   }
}
