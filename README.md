## Web app from Scratch
Introduction course about Object Oriented Coding. Create a single page web app, including an API.

## Feedback
### What was missing
**Interaction Flow Diagram**
> Het interaction flow diagram laat zien hoe de gebruiker interacteert met de app en de app views genereert Overview, detail paginas

With this project I tried using Javascript OOP for the first time. I was missing the interaction diagram that shows the user interactions.

[Link to diagrams](#Diagrams)
___
**Data manipulation**
> De data wordt gemanipuleerd met filter/sort/map/reduce.

When I request data from the API I get a lot of information. I don't need everything on the home page so before I render it to my template engine, I map the data and return just the values I need.

``` js
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
```
___

**Reduce?**

In the form there was a note saying that I didn't use reduce. (requirements were filter/reduce or map.) But I went to check it out and see if I could use it in my webapp.

After some research I decided that I don't have a pratical use for the reduce function.

[Reduce - FreeCodeCamp](https://medium.freecodecamp.org/reduce-f47a7da511a9)

## Table of Contents

- [Feedback](#feedback)
- [Week 3 End](#week-3-end)
- [Installation](#installation)
- [Features](#features)
- [API](#api)
- [Assignments](#assignments)
    - [Week 1 Pro/Cons](#week-1)
    - [Week 2 Microlibs](#week-2)
- [Wishlist](#wishlist)
- [Sources](#sources)
- [Self reflection](#self-reflection)
- [Rubric](#rubric)

## Week 3 End
In the last week I've finalized the web app. below you'll find a link to the live version. 

[Link to website](https://oege.ie.hva.nl/~jansenj031/wafs/)

![](https://github.com/jajan20/wafs/blob/master/app/static/images/newPreview-wafs.png)

## Diagrams
The diagrams below show the path the app follows using the different 'modules'. 

##### Actor
The actor represents the different modules or 'actors' for my app.

![](https://github.com/jajan20/wafs/blob/master/app/static/images/actorDiagram.png)

##### Flow
The flow diagram shows what happens when a user interacts with the site. Which event fires when clicked and where the data is called.

![](https://raw.githubusercontent.com/jajan20/wafs/master/app/static/images/flow-diagram-01.png)

## Installation
The web app can run on localhost, just be sure to register an API key with the theTVDB.

## Features
The page shows a list of the top 20 tv show titles. When clicking on a poster you'll be directed to a details page with information about the show.

- Name
- Summary 
- Rating
- Voted
- Poster + background poster

## API
This data is pulled from [TheMovieDB](https://www.themoviedb.org/) through their API.

## Assignments
# Week 1
#### Pro and con of Frameworks
##### The pro
Depending on what your end goal is but:
- You don't need to be a coding genius to make flashy visualizations.
- It can save a lot of time. 
- It is open-source, which stimulate growth.
- Has a good community.

Even though you don't need to be a coding genius, you will need to have a good understanding of vanilla javascript in order to be able to use jQuery the right way. Sadly it happens a lot that 

##### The Con
While I myself don't have any direct experience with jQuery, I've searched the internet for some answers and everyone tells me the same thing.

- While jQuery is meant to help you save time and do loads of stuff for you. It'll also make your code really messy or "code spaghetti"
- Most of the time you only need a bit of the jQuery magic, but you'll include the whole library. 

Everything you do with jQuery is also possible with vanilla javascript. In order to obtain a greater understanding of the javascript language, it is better to write everything in vanilla. Once you've mastered it completely you can use frameworks to help you.

According to "source" in 2017, the library distribution for jQuery was still 83%. Which tells us, that even though everyone says it's dead. It's still actively used around the globe.

___

#### Single Page App VS Multiple Page App


I'll be honest, I didn't really know what the difference was, or what the terms even meant. But I did some digging and I'm sure that I can explain what is what.

##### Single Page App - Advantages
- Just bits of the page are reloaded when a user makes a request. 
- Everything happens on one page, and this gives a more seamless experience.
- Single Page Apps can cache local storage effectively.

##### Single Page App - Disadvantages
- If the app isn't structured properly, the app can keep building memory.
- Search Engine Optimisation isn't perfect
- It requires JavaScript.

##### Multiple Page App - Advantages
- Perfect for bigger projects, breadcrumbs on where you are.
- It's a load easier to make search engine optimization.


##### Multiple Page App - Disadvantages
- Development can become quite complex, which in turn takes a lot more time.


## Week 2
#### Microblibs
- [Transparancy.JS](https://github.com/leonidas/transparency)
- [Routie.js](http://projects.jga.me/routie/)


#### Assignments
The challenge this week was to use micro libs for routing and templating. Even though it somewhat works, I'm still trying to figure out how it exactly works.

- [x] Manage routes en states
- [x] Get / Post data van/naar API
- [x] Data manipuleren
- [x] Data presenteren
- [ ] Web Worker implementeren (extra)
- [ ] Code review 

## Wishlist
Since I'm still a beginner with javascript and libraries my wishlist for this app is pretty long for such a small project. But my plan is to keep working on this so that at the end of this minor I can confidently say that I understand what I'm doing.

- [ ] Extending the range of titles of 20 to the complete API library.
- [ ] Refactor my code to ES6
- [ ] Optimize Search Function

## Sources
- [jQuery - the Good, the Bad & the Ugly](https://www.webdesignerdepot.com/2012/09/jquery-the-good-the-bad-and-the-ugly/)
- [jQuery is dead](https://ralphsaunders.co.uk/jquery-is-dead.html)
- [is jQuery still relevant?](https://remysharp.com/2017/12/15/is-jquery-still-relevant)
- [SPA vs MPA](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)
- [Single Page Applications](https://www.oberon.nl/whitepapers/single-page-applications)
- [TheMovieDB - API](https://www.themoviedb.org/)
- [MicroLib - Transparancy.JS](https://github.com/leonidas/transparency)
- [MicroLib - Routie.js](http://projects.jga.me/routie/)

## Self reflection
The last couple of weeks I learned a lot. But it also made me realize how much I still have to learn. The challenge was to use micro libs correctly so I could render my pages and add data dynamically.

## Rubric
- [x] Het betreft een SPA die online gehost is (github pages)
- [x] Readme.md op GH met 2x flow, api beschr.
- [x] Het object model diagram geeft inzicht in de opzet van de code
- [x] Het interaction flow diagram laat zien hoe de gebruiker interacteert met de app en de app views genereert Overview, detail paginas
- [x] De code is modulair opgezet (met modules of iig object lits), elke module in een apart bestand
- [x] Externe data wordt middels een templating engine naar HTML gerendered
- [x] De data wordt gemanipuleerd met filter/sort/map/reduce.
- [x] Er is feedback naar de user over het laden van data en wat gebeurt er als API offline
- [x] Student toont begrip van: object, method, callback, this, context, scope, closure, module, strict mode,code flow
- [x] De code volgt OOP of functional principes en de student kan pattern keuze verdedigen

> interaction flow moet nog, naming conventions kunnen beter, handleEvents laad nu de data in, reduce.
