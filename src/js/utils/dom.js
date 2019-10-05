var DomJs = {
    /**
     * On click event wrapper
     * @param { String } key 
     * @param { Function } callback 
     */
    onClick(key, callback) {
        let element = document.getElementById(key);
        element.addEventListener('click', callback);
    },

    /**
     * On form submit event wrapper
     * @param { String } key 
     * @param { Function } callback 
     */
    onSubmit(key, callback) {
        let element = document.getElementById(key);
        element.addEventListener('submit', callback);
    },

    /**
     * Check when the DOM is loaded
     * @param { Function } callback 
     */
    onDomReady(callback) {
        document.addEventListener('DOMContentLoaded', callback);
    },

    /**
     * 
     * @param { String } key Is the node id 
     * @param { String } name  Class that will be append
     */
    addClass(key, name) {
        document.getElementById(key).classList.add(name);
    },

    /**
     * 
     * @param { String } key Is the node id
     * @param { String } name Clas thtat will be removed 
     */
    removeClass(key, name) {
        document.getElementById(key).classList.remove(name);
    },

    /**
     * Return a value of the element
     * @param { String } key 
     */
    val(key) {
        return document.getElementById(key).value;
    },

    /**
     * Hide element in the DOM
     * @param { String } key The node id 
     */
    hideElement(key) {
        document.getElementById(key).style.display = 'none';
    }
}

export default DomJs;