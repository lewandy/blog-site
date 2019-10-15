var DomJs = {
    /**
     * On click event wrapper
     * @param { String } key 
     * @param { Function } callback 
     */
    onClick(key, callback) {
        try {
            let element = document.getElementById(key);
            element.addEventListener('click', callback);
        } catch (error) {

        }
    },

    /**
     * On form submit event wrapper
     * @param { String } key 
     * @param { Function } callback 
     */
    onSubmit(key, callback) {
        try {
            let element = document.getElementById(key);
            element.addEventListener('submit', callback);
        } catch (error) {
            //Do nothing
        }
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
        try {
            document.getElementById(key).classList.add(name);
        } catch {
            //Do nothing
        }
    },

    /**
     * 
     * @param { String } key Is the node id
     * @param { String } name Clas thtat will be removed 
     */
    removeClass(key, name) {
        try {
            document.getElementById(key).classList.remove(name);
        } catch (error) {
            //Do nothing
        }
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