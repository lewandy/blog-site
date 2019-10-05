export default class Auth {
	constructor(_credentials) {
		this.credentials = _credentials;

		this.user = null;
		this.authenticate();
	}

    /**
     * Return current users logued in.
     */
	userInfo() {
		return this.user;
	}

	async authenticate() {
		let data = {
			email: this.credentials.email,
			password: this.credentials.password
		};

		let response = await fetch(window.API_URI + 'login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			},
		})

		if (response.status === 200) {
			let userInfo = await response.json();
			localStorage.setItem('user',JSON.stringify(userInfo));

			this.user = userInfo;
		} else {
			this.user = null;
			console.log("Datos incorrectos");
		}
	}
}