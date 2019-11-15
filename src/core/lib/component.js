
/**
 * Register a new component or custom element.
 * @param { Array<HTMLElement> } components 
 */
export function register(components) {
   try {
      for (let component of components) {
         customElements.define(component.name, component);
      }
   } catch (error) {
      console.log(error);
   }
}

