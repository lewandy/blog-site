/**
 * Class to wrapp the logic for http requests.
 */
export default class Http {
    /**
     * 
     * @param { Object } config http client configuration
     */
    constructor(config = null) {
        this.headers = {
            "Content-Type": "application/json"
        }

        this.baseUri = config && config.baseUri || window.API_URI;
    }

    /**
     * Send http post request
     * @param { String } resource 
     * @param { Object } data 
     * @param { Function } callback 
     */
    async Post(resource, data) {
        let { headers } = this;

        let request = await fetch(`${this.baseUri}${resource}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });

        if (!request.ok)
            throw new Error('Request failed , status code :' + request.statusText);

        return await request.json();
    }

    /**
     * 
     * @param { String } resource 
     * @param { Function } callback 
     */
    async Get(resource, callback) {
        let request = await fetch(`${this.baseUri}/${resource}`, {
            method: "GET"
        });

        if (request.status !== 200)
            throw new Error('Request failed , status code :' + request.status);

        let response = await request.json();
        callback(response);
    }
}