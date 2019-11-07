export const getTemplate = async (templateUri) => {
	//TODO : Here will return the template content
	let uri = location.origin + templateUri;
	let response = await fetch(uri);
	let html = await response.text();
	return html;
}