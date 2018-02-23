var content = {
	render: {
		popularShows: function(data) {
			var directives = {
				title: { text: function() { return this.title } },
				link: { href: function() { return `#shows/${this.tvShowID}`}},
                image: { src: function() { return `https://image.tmdb.org/t/p/w500/${this.poster}` } }
           	}
            Transparency.render(document.getElementById('show'), data, directives)		
		},

		showDetail: function(data) {
			var directives = {
				title: { text: function() { return this.title } },
				summary: { text: function() { return this.summary } },
                poster: { src: function() {	return `https://image.tmdb.org/t/p/w500/${this.poster}` } },
                backdrop: { src: function() { return `https://image.tmdb.org/t/p/w500/${this.backdrop}` } },
                nrOfEpisodes: { text: function() {	return this.nrOfEpisodes } },
                rating: { text: function() { return this.rating } },
                voteCount: { text: function() {	return this.voteCount } },
                firstAirDate: { text: function() {	return this.firstAirDate } }
            }
            Transparency.render(document.getElementById('showDetail'), data, directives)
		}
	}
}

export default content