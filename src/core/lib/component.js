
/**
 * Register a new component or custom element.
 * @param { Array<HTMLElement> } components 
 */
export function register(components) {
   for (let component of components) {
      customElements.define(component.name, component);
   }
}

