import loader from './loader.js'

var http = {
	request: function(requestObject, result, err) {
		loader.show()
		var request = new XMLHttpRequest()
		
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				result(JSON.parse(request.responseText))
			}
		}
		
		request.onerror = function(error) {
			err(error)
		}

		request.open(requestObject.method, requestObject.url, true)
		request.send()
	}
}

export default http