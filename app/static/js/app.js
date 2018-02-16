// CREATE LOCAL SCOPE
(function() {

  // INITIALIZE APPLICATION
  var app = {
    // METHODS
    init: function() {
      router.init()
    }
  }

  var api = {
    request: function(url, type) {
      var request = new XMLHttpRequest()
      request.open('GET', `${url}`, true)
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

          var data = JSON.parse(request.responseText)
          var slicedData = data.results

          template.render(slicedData, type)

          console.log('allData :', data)
          console.log('slicedData: ', slicedData)
        } else {
          console.log('error, dunno why')
        }
      }
      request.onerror = function() {}
      request.send()
    },
    getAllInfo: function() {
      this.request('https://api.themoviedb.org/3/tv/popular?api_key=ff575feb141fa0d8c58ff1f806f21156&language=en-US&page=1', 'list');
    },
    getDetails: function(serieID) {
      this.request(`https://api.themoviedb.org/3/tv/${serieID}?api_key=ff575feb141fa0d8c58ff1f806f21156`, 'detail')
    }
  }

  // ROUTER & STATES
  var router = {
    init: function() {
        routie({
          'movies/:id': function(id) {
            // var sections = document.querySelectorAll('section')
            // sections.forEach(function(section) {
            //     sections.classList.toggle('active')
            // })
            template.toggle('#detail')
            api.getDetails(id)
          },
          '*': function() {
            // template.render(api.request)
            // template.toggle(routie)
            template.toggle(window.location.hash)
            api.getAllInfo()
          }
        })

        // this.handleEvents()
      }
      // handleEvents: function(){
      // var self = this
      // window.addEventListener("hashchange",function(){
      //     // console.log('hash has changed!')
      //     var route = window.location.hash.substring(1)
      //     // console.log(route)
      //     template.toggle(route)
      //     template.render()
      // })
  }


  // RENDER / TOGGLE ROUTES
  var template = {
    render: function(slicedData, type) {
      // console.log(slicedData)
      if (type === 'list') {
        var movieData = slicedData.map(function(d, i) {
          return {
            movieName: d.original_name,
            movieID: d.id,
            poster: d.poster_path,
            overview: d.overview
          }
        })
        console.log('movieData: ', movieData)

        var directives = {
          link: {
            href: function() {
              return `#movies/${this.movieID}`
            }
          },

          image: {
            src: function() {
              return `https://image.tmdb.org/t/p/w185/${this.poster}`
            }
          }
        }
        Transparency.render(document.getElementById('movies'), movieData, directives)
      } else if (type === 'detail') {
        //             var movieData = slicedData.map(function(d, i) {
        //             return {
        //                 movieName: d.original_name,
        //                 movieID: d.id,
        //                 poster: d.poster_path,
        //                 overview: d.overview
        //             }
        // })
        console.log('movieData: ', movieData)

        var directives = {
            link: {
              href: function() {
                return `#movies/${this.movieID}`
              }
            },

            image: {
              src: function() {
                return `https://image.tmdb.org/t/p/w185/${this.poster}`
              }
            }
          }
          // Transparency.render(document.getElementById('movies'), movieData, directives)
      }
    },
    toggle: function(route) {


      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('visible') // Hide all sections.
      })
      document.querySelector(route).classList.add('active') // Display a section based on the route/#.
    }
  }

  // START APPLICATION
  app.init()
})()
