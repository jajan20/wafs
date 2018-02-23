import api from './api.js'
import content from './content.js'

var events = {
	filterByTitle: function() {
		var filterElement = document.getElementById('filter')
		var filteredShows = []
		
		filterElement.onkeyup = function(e) {
			var value = e.currentTarget.value

			filteredShows = []

			api.shows.forEach(function(show){
				var title = show.title.substring(0, value.length).toLowerCase()

				if (value === title) {
					filteredShows.push(show)
					content.render.popularShows(filteredShows)
				}
			})
		}
	},
	allowBack: function() {
		var backBtn = document.querySelector('.back-btn')
		
		backBtn.onclick = function() {
			window.history.back()
		}
	}
}

export default events