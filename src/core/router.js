import { register } from "./lib/component";
import Auth from "../js/services/authService"
import RouterViewComponent from "./components/router-view";
import BlogApp from "../js/app";

export default class Router {
	routes = []
	appNodeId = 'app'

	constructor(config) {
		this.routes = config.routes;
		this.registerComponents(config.routes);
		this.goToInitialRoute();

		this.onPopsState();
	}

	onPopsState() {
		window.onpopstate = () => {
			this.goToRoute(window.location.pathname);
		}
	}

	goToInitialRoute() {
		const pathname = window.location.pathname;
		let matched = this.routes.find(route => route.initial);

		if (Auth.isAuth()) {
			this.goToRoute("/home");
		} else {
			this.goToRoute(matched.path);
		}
	}

	goToRoute(uri) {
		//Find the route info
		let matched = this.routes.find((route) => {
			return route.path == uri || route.path instanceof RegExp && route.path.test(uri)
		})

		if (!matched) {
			alert(`This route not exists ${uri}`);
			return; //Exit function
		}
		window.history.pushState({}, uri, location.origin + uri);

		//mount the new node component to the app container node...
		let component = document.createElement(matched.component.name);

		if (this.isMain(matched)) {
			//Get the app container node
			let appContainer = document.getElementById(this.appNodeId);
			appContainer.innerHTML = "";
			appContainer.appendChild(component);
		} else {
			let viewRouter = document.getElementsByTagName("router-view")[0];
			viewRouter.innerHTML = "";
			viewRouter.appendChild(component);
		}

	}

	/**
	 * Verify if the route is main or not.
	 */
	isMain(route) {
		return route.main || false;
	}

	/**
	 * Define and register all components and routes
	 */
	registerComponents(routes) {
		let components = routes.map(item => item.component);
		register(components.concat([RouterViewComponent]));
	}
}
