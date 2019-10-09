export  const getTemplate = (templateUri, callback) => {
    //TODO : Here will return the template content
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			callback(xhr.responseText);
		}
    };
    
	xhr.open('GET', templateUri);
	xhr.send();
}