// Create local scope
(function() {
    // Initialize application.
    var app = {
        // Method
        init: function() {
            routes.init()
            api.request()
        }
    }

    var api = {
        request: function() {
            var request = new XMLHttpRequest()
            request.open('GET', 'https://api.themoviedb.org/3/tv/popular?api_key=' + 'API KEY' + '&language=en-US&page=1', true)
            request.onload = function () {
                if (request.status >=200 && request.status < 400) {
                    var data = JSON.parse(request.responseText)
                    // console.log('red hij het tot hier?' + data)
                    //render template
                    var slicedData = data.results
                    template.render(slicedData)
                    console.log('slicedData: ', slicedData)
                } else {
                    console.log('Red hij niet? ')
                }
            }
            request.onerror = function() {}
        
        request.send()    
        }   
    }

    // Handle routes & state
    var routes = {
        init: function(event) {
          this.handleEvents()
        },
        handleEvents: function(){
            // var self = this
            // window.addEventListener("hashchange",function(){
            //     // console.log('hash has changed!')
            //     var route = window.location.hash.substring(1)
            //     // console.log(route)
            //     template.toggle(route)
            //     template.render()
            // })
        }
    }

    // Render / toggle sections
    var template = {
        render:function(slicedData) {    
            // console.log(slicedData)

            var movieData = slicedData.map(function(d, i) {
                        return {
                            movieName: d.original_name,
                            movieID: d.id
                        }
            })
            console.log('movieData: ', movieData)

            var directives = {
                link: {
                    href: function() {
                        return `#movies/${this.movieID}`
                    }
                }
            }
            Transparency.render(document.getElementById('movies'), movieData, directives)

        },
        
        toggle: function(currentRoute) {
            var sections = document.getElementsByClassName('section')
            
            for (let section of sections) {
                section.id === currentRoute ? section.classList.add('active') : section.classList.remove('active')
            }
        }
    }

    // Start application
    app.init()

})()









