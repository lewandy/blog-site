export const getTemplate = async (templateUri) => {
	//TODO : Here will return the template content
	let response = await fetch(templateUri)
	let html = await response.text();
	return html;
}