/**
 * Class to wrapp the logic for http requests.
 */
export default class Http {
    /**
     * @param { Object } config http client configuration
     */
    constructor(config = null) {
        this.baseUri = config && config.baseUri || window.API_URI;
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.token}`
        }
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
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('_token')}`
            },
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
    async Get(resource) {
        let request = await fetch(`${this.baseUri}${resource}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('_token')}`
            }
        });

        if (request.status !== 200)
            throw new Error('Request failed , status code :' + request.status);

        let response = await request.json();
        return response;
    }

    Put(resource) {
        let { headers } = this;

        fetch(`${this.baseUri}${resource}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('_token')}`
            }
        });
    }

    Delete(resource) {
        let { headers } = this;

        fetch(`${this.baseUri}${resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('_token')}`
            }
        });
    }
}