// Create local scope
(function() {
    // Initialize application.
    var app = {
        // Method
        init: function() {
            routes.init()
        }
    }

    // Handle routes & state
    var routes = {
        init: function(event) {
            window.addEventListener("hashchange",function(){
                // console.log('hash has changed!')
                var route = window.location.hash.substring(1)
                // console.log(route)
                sections.toggle(route)
            })
        }
    }

    // Render / toggle sections
    var sections = {
        toggle: function(currentRoute) {
            var sections = document.getElementsByClassName('section')
            
            for (let s of sections) {
                s.id === currentRoute ? s.classList.add('active') : s.classList.remove('active')
            }
        }
    }

    // Start application
    app.init()
})()
