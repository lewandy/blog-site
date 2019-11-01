const TOKEN = localStorage.getItem("_token") || null;

export function initWebSocket(uri) {
	let URI = uri + TOKEN;

	//Todo : WebSocket
	var ws = new WebSocket(URI);

	ws.onclose = function (e) {
		console.log(e);
	}

	ws.onmessage = (e) => {
		console.log(e);

		// let event = new CustomEvent(e);
	}
}



