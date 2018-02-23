## Week 1
### Pro's and Con's

### Frameworks
##### The Pro's
Depending on what your endgoal is but:
- You don't need to be a coding genius to make flashy visualisations.
- It can save a lot of time. 
- It is open-source, which stimulate growth.
- Has a good community.

Even though you don't need to be a coding genius, you will need to have a good understanding of vanilla javascript in order to be able to use jQuery the right way. Sadly it happens a lot that 

#### The Con's
While I myself don't have any direct experience with jQuery, I've searched the internet for some answers and everyone tells me the same thing.

- While jQuery is meant to help you save time and a loads of stuff for you. It'll also make your code really messy or "code spaghetti"
- Most of the time you only need a bit of the jQuery magic, but you'll include the whole library. 

Everything you do with jQuery is also possible with vanilla javascript. In order to obtain a greater understanding of the javascript language it is better to write everything in vanilla. Once you've mastered it completely you can use frameworks to help you.

Acording to "source" in 2017 the library distribution for jQuery was still 83%. Which tells us, that even though everyone says it's dead. It's still actively used around the globe.

### Single Page App VS Multiple Page App

I'll be honest, I didn't really know what the difference was, or what the terms even meant. But I did some diggin and i'm sure that I can explain what is what.

##### Single Page App - Advantages
- Just bits of the page are reloaded when a user makes a request. 
- Everything happens on one page, and this gives a more seamless experience.
- Single Page Apps can cache local storage effectively.

##### Single Page App - Disadvantages
- If the app isn't structured properly, the app can keep building memory.
- Search Engine Optimalisation isn't perfect
- It requires JavaScript.

##### Multiple Page App - Advantages
- Perfect for bigger projects, breadcrumbs on where you are.
- It's a load easier to make search engine optimalisations.


##### Multiple Page App - Disadvantages
- Development can become quite complex, which in turn takes a lot more time.

## Sources:
- [jQuery - the Good, the Bad & the Ugly](https://www.webdesignerdepot.com/2012/09/jquery-the-good-the-bad-and-the-ugly/)
- [jQuery is dead](https://ralphsaunders.co.uk/jquery-is-dead.html)
- [is jQuery still relevant?](https://remysharp.com/2017/12/15/is-jquery-still-relevant)
- [SPA vs MPA](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
- [Single Page Applications](https://www.oberon.nl/whitepapers/single-page-applications)

## Week 2
#### Microblibs
- [Transparancy.JS](https://github.com/leonidas/transparency)
- [Routie.js](http://projects.jga.me/routie/)


#### Assignments
The challenge this week was to use microlibs for routing and templating. Even though it somewhat works, I'm still trying to figure out how it exactly works.

- [x] Manage routes en states
- [x] Get / Post data van/naar API
- [x] Data manipuleren
- [x] Data presenteren
- [ ] Web Worker implementeren (extra)
- [ ] Code review 

## Week 3

TvShows - Single Page WebApp.

[Link to website](https://oege.ie.hva.nl/~jansenj031/)

### Preview
![](/Users/jamie/Dropbox/HVA/Minor/preview.png)


### Diagrams
The diagrams below show the path the app follows using the different 'modules'. 

##### Actor
The actor represents the different modules or 'actors' for my app.

![](/Users/jamie/Dropbox/HVA/Minor/actorDiagram.png)

##### Flow
The flow shows the route every actor connects to and who stands in the spotlight the most.

![](/Users/jamie/Dropbox/HVA/Minor/flowDiagram.png)




#### Features
The page shows a list of the top 20 tv show titles. When clicking on a poster you'll be directed to a details page with information about the show.

- Name
- Summary 
- Rating
- Voted
- Poster + background poster

This data is pulled from [TheMovieDB](https://www.themoviedb.org/) through their API.

#### Usage
You need a registered API key in order to be able to use full functionallity.
I've uploaded my source file for now so that you can use the app.

#### Wishlist
Since I'm still a beginner with javascript and libraries my wishlist for this app is pretty long for such a small project. But my plan is to keep working on this so that at the end of this minor I can confidently say that I understand what I'm doing.

- [ ] Extending the range of titles of 20 to the complete API library.
- [ ] Refactor my code to ES6
- [ ] Optimize Search Function

#### Sources
- [TheMovieDB - API](https://www.themoviedb.org/)
- [MicroLib - Transparancy.JS](https://github.com/leonidas/transparency)
- [MicroLib - Routie.js](http://projects.jga.me/routie/)


## Looking back
The last couple of weeks I learned a lot. But it also made me realise how much I still have to learn. The challenge was to use microlibs correctly so I could render my pages and add data dynamicly.




