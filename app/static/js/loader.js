var loader = {
	hide: function(){
		var hideLoader = document.getElementById('loaderContainer')
		hideLoader.classList.remove('activeLoader')
	},
	
	show: function(){
		var hideLoader = document.getElementById('loaderContainer')
		hideLoader.classList.add('activeLoader')
	}
}

export default loader