import Auth from './services/authService'
import DomJs from './utils/dom.js'

DomJs.onDomReady(() => {
	DomJs.onSubmit('login-frm', () => {
		let email = DomJs.val('inputEmail');
		let password = DomJs.val('inputPassword');

		try {
			let auth = new Auth()
				.authenticate({ email, password });

			auth
				.then(res => {
					console.log(res); //TODO: 
				})
				.catch(err => {
					console.log(err); //TODO
				})
		} catch (error) {
			console.log("Login failed");
		}
	});

	DomJs.onSubmit('register-frm', (e) => {
		let name = DomJs.val('name');
		let email = DomJs.val('email');
		let password = DomJs.val('password');
		let confirmPassword = DomJs.val('confirm-password');

		if (password !== confirmPassword)
			alert("Las contraseñas no coinciden");
		
		//TODO : Register the user

		
	})

	DomJs.onClick('show-register', () => showRegister())
	DomJs.onClick('btn-cancel', () => showLogin())
})

function showRegister() {
	DomJs.addClass('form-login', 'hide-element');
	DomJs.removeClass('form-register', 'hide-element');
}

function showLogin() {
	DomJs.removeClass('form-login', 'hide-element');
	DomJs.addClass('form-register', 'hide-element');
}


