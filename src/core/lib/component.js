
/**
 * Register a new component or custom element.
 * @param { Array<HTMLElement> } components 
 */
export function register(components) {
   for (let component of components) {
      if (!window.app_components)
         window.app_components = [component.name]
      else if (window.app_components.includes(component.name))
         console.error(`Component called:${component.name} is already registered.`)
      else {
         window.app_components.push(component.name);
         customElements.define(component.name, component);
      }
   }
}

