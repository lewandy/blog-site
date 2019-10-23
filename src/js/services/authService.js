import Http from "../utils/http"

/**
 * Class to wrap logic for security operations.
 */
export default class Auth {
	user = null;

	constructor() {
		this.http = new Http();
	}

	static get user() {
		return localStorage.getItem("user") || null;
	}

	/**
	 * Logout the current session.
	 */
	static logout() {
		
	}

	/**
	 * Verify the user credentials
	 * @param { Object } credentials user credentials
	 * @returns { Object } 
	 */
	async authenticate(credentials) {
		let auth = await this.http.Post('login', credentials);
		return auth;
	}

	/**
	 * Register a new user
	 * @param { Object } user 
	 */
	async register(user) {
		let registered = await this.http.Post('register', user);

		return await registered;
	}


}