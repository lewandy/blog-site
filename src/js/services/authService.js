import Http from "../utils/http"

/**
 * Class to wrap logic for security operations.
 */
export default class Auth {
	constructor() {
		this.user = null;
	}
	/**
	 * Verify the user credentials
	 * @param { Object } _credentials user credentials
	 * @returns { Object } 
	 */
	async authenticate(_credentials) {
		let auth;
		let http = new Http();
		auth = await http.Post('login', _credentials);

		return auth;
	}
}