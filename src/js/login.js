import Auth from './services/authService'
import DomJs from './utils/dom.js'


DomJs.onDomReady(() => {
	onShowRegisterForm();
})

function onShowRegisterForm() {
	DomJs.onClick('show-register', () => {
		DomJs.addClass('form-login','')
	})
}

function onSubmitLogin() {
	DomJs.onClick('btn-login', (e) => {
		console.log()
	});
}

function onClick(e) {
	e.preventDefault();

	let email = DomJs.val('inputEmail');
	let password = DomJs.val('inputPassword');

	try {
		var auth = new Auth({
			email,
			password
		});

		if (auth.user !== null) {
			window.location = "/blog";
		} else {
			console.log("Login Failed")
		}
	} catch (error) {
		console.log(error);
	}
}

function showRegisterForm() {
	DomJs.removeClass('form-register', 'hide-element');
}

function hideRegisterForm() {
	DomJs.addClass('form-register', 'hide-element');
}


