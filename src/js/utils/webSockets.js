
export function initWebSocket(uri) {
	let URI = uri + localStorage.getItem("_token");

	//Todo : WebSocket
	var ws = new WebSocket(URI);

	ws.onclose = function (e) {
		console.log("Se cerro la conexion");
	}

	ws.onmessage = (e) => {
		let data = JSON.parse(e.data);
		document.dispatchEvent(new CustomEvent(data.type, {
			detail: data
		}));
	}
}



