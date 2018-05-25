import api from './api.js'
import content from './content.js'
import events from './events.js'
import loader from './loader.js'

var router = {
	init: function() {
		this.handleEvents()
		// console.log('Router initialized!')
	},
	toggle: function(sectionToToggle) {
		var sections = document.querySelectorAll('section')
		var activeSection = document.querySelector(sectionToToggle)
	
		// console.log('active section: ', activeSection)

		sections.forEach(function(section) {
			section.classList.remove('active')
		})
		activeSection.classList.add('active')
	},
	handleEvents: function(id){
		var self = this
		var home = function() {
			api.getPopularShows(
				function(data) {
					content.render.popularShows(data)
					self.toggle('#popularShows')
					events.filterByTitle()
					loader.hide()
					
				},
				function(err) {
					// Do something with the error
					document.getElementById('errorWindow').style.visibility = "visible"
					
					setTimeout(function() {
             			console.log('FUCK')
             			document.getElementById('errorWindow').style.visibility = "hidden"
             		}, 4000)
				}
			)
		}

		var detail = function(id) {
			api.getShowDetail(id,
				function(data) {
					content.render.showDetail(data)
					self.toggle('#showDetail')
					events.allowBack()
					loader.hide()
				},
				function(err) {
					// Do something with the error
					document.getElementById('errorWindow').style.visibility = "visible"
					
					setTimeout(function(){
             			console.log('FUCK')
             			document.getElementById('errorWindow').style.visibility = "hidden"
             		}, 4000)
				}
			)
		}

		routie({
			'': home,
			'home': home,
			'shows/:id': detail
		})
	}
}

export default router