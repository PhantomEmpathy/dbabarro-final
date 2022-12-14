# MEDIA TRACKER

**Author**: Daniel Babarro Cid

**Version**: 1.0.0

Developed for the GA Front End Development Course with Fundation Adecco.

## HOW TO USE

Use `npm start` to start the server on localhost por 3000.

If there is any errors, try `npm install` to refresh any dependencies before opening the project again.

## LIBRARIES & TECHNOLOGIES

In this project we can find the following technologies: 
- **React**

React allowed me to build a fast and dynamic webpage. The fact that only components get rendered without the need to refresh the entire page is vital in a project like this one, where lots of information is obtained from an API. That is important not only for optimizing data usage, but it was also a big time saver to reutilize a component in many places with a single line.
- **Sass**

We used Sass to expand from what CSS can't do for now. For example, being able to use '&' as a placeholder for his nested parent is a lifesaver when it comes to changing a class name in the middle of a project. Also, I am particularly fond of using variables for things like fonts-names or colours.

It's important to note that I used BEM as my namimg methodology for my classes, making Sass a perfect addition to how well they combine.
- **HTML**

Standard HTML mixed with the way React uses JSX. For basic structure, I tried to use some specific elements like 'main, section, ...' and so on, trying to think a little bit about SEO and the optimization of the webpage.
- **Javascript** 

More than 70% of the project. It has been used to build the basic logic structure of my web app, as well as to control data and conditionals to show or not some elements/components.

Array and Object management was a big part of the project. Being able to use helpful methods like .map, .find or .filter proved to be indispensable for my work.

Aswell as some libraries:
- **react-router-dom**

To allow me to route every page in my project. Including NavLinks, who setted the active class for me.

- **axios**

To be able to fetch data from the API endpoints and display any errors.

- **react-infinite-scroll-component**

Let me import a component who handle by himself my infinite scroll pagination.

## PROJECT

The idea behind this project was to create an app that offers information about movies and TV shows, specifically whether they are available in streaming services or not and where they are. The Home page provides information about movies playing in cinemas and trending shows this week. It needed two dedicated pages, one for films and the other for tv shows. Lastly, it allows searching for a specific title with the searchbar. 

The direct information (the one that does not require clicking on the film or tv show) had to be concise: the title, a date (to differentiate between reboots or similarly named movies) and a rating that indicates the quality of the show. The bookmark system allows you to mark a title as a favourite so that it can appear later in "My list". 

If we click on one of the titles, it gives us more concrete information. For starters, we can find the general overview with data such as the genres, the duration of the film or chapter, the synopsis and some information about the streaming services that provide the title. We can also find the cast and the characters they play. 

The information menu inside the title allows me to expand that information to a small overview of the seasons (exclusive to tv shows), more detailed information about where to watch, buy or rent the film or tv shows and a small gallery of pictures. 

Lastly, the intention was to offer the previously mentioned in every language and region (within the API capabilities). For this project has been used Spanish (from Spain), French (from France) and American English, being the last one the default language of the page.

## WIREFRAMES

As a wireframe for this project, I decided to make an early demo on simple HTML/CSS to ensure that I liked the design and that everything was lining up.

- **Header**: ![Wireframe-Header](https://user-images.githubusercontent.com/109437140/208704629-9eab91ce-e711-422e-bc46-5bdec22aa904.jpg)
- **Home**: ![Wireframe-General](https://user-images.githubusercontent.com/109437140/208703184-78fc5fdd-2c2a-4656-aa0f-28e7097488f7.jpg)
- **Info**: ![Wireframe-Info](https://user-images.githubusercontent.com/109437140/208703218-4aa4b3ce-1529-4c42-923e-5f3604360103.jpg)

They can also be found in the wireframes folder in this project.

## ISSUES

The principal issue was the first choice of the API: information was not only scattered around different endpoints but  the monthly limit for the free membership was way too low. I then tried TMDB, one of the two major movie databases on internet. It worked perfectly with no limit at all.

Others issues had to do with design. All of the posters that the API return are vertical ones but the initial design of the project had horizontal images to show the different shows, so I had to change them and came up with a new -and better- design overall. Cleaner and less piled up.

The bookmark system has been a bit of a headache at first, as they had to be saved on local storage to keep everything bookmarked by the user even if the page refreshed. But it was easily fixed keeping a reference on local storage to know when something was or not in my bookmarks and refresh the icon.

Seasons had a weird way of being returned by the API so it was pretty hard to try and build and reset the array who contained my seasons info objects. I came up with an idea to show every season with a menu, one by one, and avoid the issues with React async functions that made it pretty hard to display it in the first place.

