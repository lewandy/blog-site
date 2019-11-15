export default class serviceContainer {
   services = {};

   /**
    * 
    * @param {String} key Identifier of the service
    * @param {Object} instance Instance of the service
    */
   register(key, instance) {
      this.services[key] = instance;
   }
}