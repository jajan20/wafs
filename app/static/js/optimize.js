var optimize = {
	popularShows: function(data){
		return data.results.map(function(item) {
			return {
				title: item.original_name,
				tvShowID: item.id,
				poster: item.poster_path,
				summary: item.overview
			} 
		})
	},
	popularShowDetail: function(data) {
		return {
			title: data.original_name,
			tvShowID: data.id,
			poster: data.poster_path,
			backdrop: data.backdrop_path,
			summary: data.overview,
			nrOfEpisodes: data.number_of_episodes,
			firstAirDate: data.first_air_date,
			rating: data.vote_average,
			voteCount: data.vote_count
		}
	}
}

export default optimize