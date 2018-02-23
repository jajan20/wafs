import http from './http.js'
import optimize from './optimize.js'

var api = {
	shows: [],
	getPopularShows: function(result, errorCallback) {
		console.log('api.getPopularShows')
		var request = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/tv/popular?api_key=ff575feb141fa0d8c58ff1f806f21156'
		}

		http.request(request, 
			function(response) {
				var data = optimize.popularShows(response)
				api.shows = data
				result(data)

			}, 
			function(err) {
				console.log('Error:', err);
				errorCallback(err)
			}
		)
	},
	getShowDetail: function(id, result, errorCallback) {
		var request = {
			method: 'GET',
			url: 'https://api.themoviedb.org/3/tv/'+id+'?api_key=ff575feb141fa0d8c58ff1f806f21156&language=en-US'
		}

		http.request(request, 
			function(response) {
				var data = optimize.popularShowDetail(response)
				result(data)
			}, 
			function(err) {
				console.log('Error:', err);
				errorCallback(err)
			}
		)
	}
}

export default api