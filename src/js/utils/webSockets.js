
export function initWebSocket(uri) {
	let URI = uri + localStorage.getItem("_token");

	//Todo : WebSocket
	var ws = new WebSocket(URI);

	ws.onclose = function (e) {
		console.log("Se cerro la conexion");
	}

	ws.onmessage = (e) => {
		console.log(e);

		// let event = new CustomEvent(e);
	}
}



