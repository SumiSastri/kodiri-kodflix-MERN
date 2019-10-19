# Kodiri-Kodflix-ERN (Express-React-Node-Section 2)

Table of Contents
- Learning objectives
- What is the front-end
- What is the back-end
- How do the front-end and back-end communicate?
- What is JSON
- What is Ajax & async JavaScript
- What is the JavaScript Event Loop
- ES-6 Promises vs. CallBacks
- ES-8 Async Await
- API's REST vs. SOAP
- What is the MEAN-MERN Stack
- What is node?
- What is express?
- What is nodemon?
- What are Axios/ Superagent?
- Node vs. Yarn which is better?

Challenges 18-26 - How to Guide

Challenge 18 - clean up folder structure
Challenge 19 - add node and express
Challenge 20 - add nodemon
Challenge 21 - set up server and check data flows
Challenge 22, 24 , 25 - render all pages with back-end data
Challenge 23 - set up back end server for deploy with build files
Redeploy to Heroku with node-based data
Challenge 26 - install MongoDb - Section 3 files

## Learning Objectives

The Kodflix project has been split into 3 sections - Section 1 - deploying with front-end data/ This is Section 2 - deploying with data in a node file. Section 3 - moves the data to a cloud based MongoDB schema.

At this stage my focus was to understand how the backend and frontend data connected and were configured - both in theory and practice

#### What is the front-end?

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language), CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

#### What is the backend?

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored -  cookies/ authentication codes, etc. User data -  personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

#### How do the front-end and back-end communicate? Client-Server API communication

HTTP (hyper-text-transfer-protocol) is the protocol, standards or rules that connect the front-end(client-side) to the back-end (server-side).  HTTPS (hyper-text-transfer-protocol-secure) - encrypts the client-service request-response for enhanced security. This is done via an encryptation layer using SSL (secure sockets layer) or TLS (Transport Layer Security)

HTTP & HTTPS enable documents to be transported to and from browsers and back-end databases. It is the basis of data-exchange on the web. The browser (client) sends a request to the server (where documents are hosted) and the server sends a response. The request-response pattern (which is based on  a set of rules, standards or protocols) is the language of communicaton between client (browser, front-end) and server (back-end, databases). 

The backend (server side) depends on API's to run HTTP requests from databases that are written in a plurality of languages (PHP, Scala, Go-Lang, Python). Client requests are with three key languages - HTML,CSS and JavaScript. For these languages to be understood by the front-end (client-side). 

The process of converting the data in javascript from a backend database in a language that is not javascript is done through JSON - javascript object notation.

#### What is JSON?

JSON is a lightweight store of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases. As it is a text-based format it is lightweight.  It is then  reconverted back into the format that the database requires. It therefore stores and transports data quickly and efficiently. Compared to XML parsing, JSON is less verbose. JSON uses less data overall so reduces cost and increases parsing speed. 

The way that JavaScript is converted into JSON is to intatiate a JavaScript object to a variable. This object is then assigned to the method  ```JSON.parse()```. The method, parses the JavaScript object and convert this JavaScript Object (front-end, client-side language) into Java Script Obect Notation(JSON). The converted object to JSON is sent server-side: Note the syntax to convert a JS object into JSON-

```const objectName = JSON.parse ('{"name":Kodflix", "description":"some description"})'```

The backend now gets a JSON request. JSON is read and the response method used in the back-end code should convert the body of the response first into text then into JSON response with the  ```JSON.stringify()``` method. The backend data is converted into text and intatiated to a variable that is the new response payload (data) which is text that needs to be converted back into JSON. JSON is then 

```const convertToJSON = JSON.stringify({name: 'Kodflix', id: 1})```

Note the JSON vs JavaScript object syntax. JavaScript the name value pair, only if the value is a string is it in quotes, however with JSON both the name and value are in strings. JSON objects both the name and value pair are enclosed in quotes, to denote both are strings. 

However, there are also similarties -  curly-braces hold the values of an object, square-braces hold the values of arrays.

To visualise JSON better - add the Chrome Extension JSONView

Edureka has a good video worth watching[https://www.youtube.com/watch?v=uw_rP5bV9r0] for a more detailed understanding.

 #### What is the JavaScript event-loop?
 
 Node and express provide an event-driven architecture for apps and projects. An event is a series of occurences driven by changes on the frontend. Events build up in the task queue and are executed by parsers (both in the front-end and back-end).

 As javascript is a single-threaded non-blocking code base, it is able to deal with multiple tasks on the task queue driven by events.

 For more detail on the event-loop, MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

#### What is Ajax and async JavaScript?

Ajax was created by google to allow you to make a get request (client-side) which is sent to back-end servers. The server sends back a response but instead of loading everything at the same time, a code block is run on load, and assigns only those elements that need to be re-rendered) without reloading the page whole page while data (or the payload) is sent in the background.  It is a combination of tools and is mainly accessed via the global ```fetch```method in browsers.

React does not have its own in-built AJAX library.

Most server-side code is parsed synchronously - which means each thread executes one function before going on to the next. JavaScript uses a single thread asynchronously to handle several front end requests at the same time.

These requests are sent as an event queue to the server side. JavaScript methods such as call back functions, promises, etc, allows the front-end call stack (requests in an event-queue) to handle all these requests and return in the response from the server side back to the client the elements that can be rendered quickly first while others that need more time to send the data later.

 Async javascript is used extensively in connecting the backend to front-end user interfaces and forms and important part in joining up the stack. It is specifically used for single-page-applications.

Some other async methods are ```setState({]})``` event handlers ```onClick.()``` and ```setTimeOUt.()``` are some other examples.

For more on async javascript, callbacks, promises and recursion checkout Gray's Kodiri videos [https://www.youtube.com/watch?v=pX74__nD48I] [https://www.youtube.com/watch?v=F5XD1JNhkP8] [https://www.youtube.com/watch?v=PlhmNNNyYyogit]

#### ES-6 call-backs vs. Promises

A call back is executed when one function calls another function. Map,filter and reduce are call-back functions. There is a synchronous nested functionality where one code block has to run before the other can be executed and can lead to what was known as "call-back-hell" or "the pyramid-of-doom". It was also dependent on several conditional statements

Promises serve the same purpose as call-backs were created in ES-6 to solve the call-back-hell problem with using the constructor method  that takes two params - resolve and reject - the promise gets executed with a series of .then blocks that results in the promise ending with three states:-
- Fulfilled
- Rejected
- Pending

Promises take 2 arguments ```return new Promise (resolve, reject)``` followed by```.then()``` blocks

#### ES-8 Async Await

Async await is built on top of promises - it makes promises look like synchronous code. As JavaScript is now used both in the back-end and front-end, it helps server-side and client-side developers understand the code base. There are two key words ```async``` and ```await``` it is syntactic sugar over promises. 

#### SOAP vs. REST?

SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST). Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete. 

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted. 

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on XML calls while REST on JSON. SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP, which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight becuase of JSON and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform XML data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest] [https://www.codecademy.com/articles/mvc]

#### What is the MEAN-MERN stack?

A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner,  angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

* The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor  unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.

#### What is node.js?

Node is not a language it is an open source runtime environment created by Ryan Dahl in 2009. Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side. It is cross-platform and works on Chakra and SpiderMonkey engines as well.

While node it is based on JavaScript, it is not a language but a cross-platform environment. It also runs different API’s for HTTP requests, file systems, streams, child-processes to render server-side data/payloads/information. It is easy to install and with node package manager(npm) offers access to a plethora of open source packages to add to apps/ projects.

The fluid data flow client-to server, with node, express and associated npm packages, is due to the fact that node is based on JavaScript. It is, like JS, a single-thread, non-blocking system in runtime.

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end javascript code and the backend database. (Trello, googledocs, DropBox use node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the backend is run on php, Scala, java and other non-js languages.

Node & Express are not good for CPU heavy applications. 

Node Documentation [https://nodejs.org/en/docs/guides/getting-started-guide/]

Good articles to read to understand how and why you would use Node.js as the backend server
* Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
* Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]

#### What is express.js?

Express.js forms part of the middle-ware between the backend server and the front-end ui-ux. 

Just as React is a library that manages browser-based data in state/ ui-ux changes and DOM manipulation, Express is a frame-work that manages requests from the servers' databases to the front-end.

Express comes with it's own syntax and methods. It is a protocol and has a more rigid structure but is lightweight and very quick to set up. The basic code for set up to test the server is working is below.

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Kodflix App Says Hello World!'));

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
```

Instead of writing code in nodes in the document, express methods help route responses and requests to and from the servers' databases to the front-end.

This backend routing of the data happens through API calls and routing of URLs that are not visible to the end-user.

Documentation [https://expressjs.com/en/4x/api.html#app]
Reading-list:
[https://jilles.me/getting-the-express-app-js/]
[https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4]
[https://jilles.me/express-routing-the-beginners-guide/]
[https://expressjs.com/en/guide/routing.html]

#### What is Axios and Superagent?
The two most popular options for making AJAX request with React are Fetch and Axios. As React does not have Ajax to use promises in React you need to install axios [npm install axios]

Axios is like Ajax and you can use ES-6 promises with Axios in React.

SuperAgent does not have promises baked-into the library

#### Backend package managers - Node vs. Yarn

Both are open source registries for software libraries for node.js, yarn is owned by Facebook, npm by npm Inc.

- What do package managers do? They automate the process of installing, updating, configuring, and removing pieces of software packages retrieved from a global registry.

They are different from operating system package managers, such as Brew. Brew also installs, updates, configures and removes software but in a local environment (OS).

- Which one?
- My preference is npm - after using yarn as it is signifcantly faster, updates to yarn cause conflicts in installation. I had a lot of problems and have globally uninstalled yarn

Yarn takes up a lot of disk space, but is faster, manages licences better however, the disc usage space vs efficiency npm considered the better option
- npm is a better package to manage dependencies as sends usage details back to Facebook - yarn official stance is that this is not accurate information
- npm is written all in lower case node package manager installation is sequentially
- yarn uses all of the npm packages it is only a different installation process - using cloudflare, multiple installations happen at the same time

- Conflicts
If npm-run-all does give you trouble, which it shouldn't, you could consider installing yarn-run-all
Using both at the same time creates conflicts so use one or the other in the CLI for your project 

- Good articles to read to compare the two package managers:- 
* Installation and use [https://www.positronx.io/yarn-vs-npm-best-package-manager/]
* Which is better - op-ed[https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/]
* Scotch[https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm]
* Keycdn (almost the same as scotch.io) [https://www.keycdn.com/blog/npm-vs-yarn]

#### What is nodemon?
Nodemon hot loads the back end server so you do not need to run commands such as  ```node src/backend/app.js``` (used in this project).
Check in your package-JSON for the install and read documentation [https://github.com/remy/nodemon] which helps bug fixing if you encounter challenges hot-loading.

# HOW TO GUIDE - CHALLENGES 18 TO 30

##### Challenge -18 Setting up the backend server with node and express

Change the folder structure once you need data in the back end.
 
Move all your files into 2 separate categories - FE (Front-end) and BE (Backend).

In the FE src folder - move all the components created and their folders
Reconfigure imports to all pages based on the new file/ folder structure run [yarn start] make sure the front end is still working as intended.

Start on the backend - import express from npm and install/add it to the project
In the BE src folder - create an app.js file and set up express [https://expressjs.com/en/starter/hello-world.html] check that the port is listening [node src/back-end/app.js], refresh the browser and make sure that message is working in the FE port - this shows the runner has connected.

(See main section on express for set up)

#### Challenge -19 reconfigure app files/ install node.js and express.js

Reconfigure project files with 2 source folders one for the frontend and one for the backend.
Install node and express in the project and check package-json to ensure they are added as dev-dependencies.

[yarn init] (intialise the project)
[yarn add node -S] [npm install node]
[yarn add express] [npm install express -S](install express midware that runs data from server via axios to Postman/ Insomnia)

With node.js the import-export methods in react.js do not work as they work in different ways.

With node.js, a node module, the method used is ```require``` once a module is described in the require method, it is assign it to a variable. Once the module is "required", or loaded, we can use the ```module.exports``` method.

Replace the ```export default function getFilms() { return [{}]}``` method which is react.js syntax with the node.js syntax.

There several methods you can use to fetch data and the syntax is described well in this article -  Read [https://www.openmymind.net/2012/2/3/Node-Require-and-Exports/]

Notes on the above documentation:-
In the data section the module you can write is fairly simple ```module.exports = function getFilmsData() {return {[{  }]}``` with the return statement returning an array of objects with your data enclosed.

In the app.js file the  ```app.get('path', function(request, response) { return response.send() })``` method, the first argument is the backend API url path you create. ```app``` refers to the express app that has been declared as a variable when you set up the backend server with express. The second argument is a call-back function that takes two arguements - request and response. The request is the information/data/ payload to the server. The call back function returns the ```response.send()``` method which returns the data/payload object ```(getfilmsData{})``` and returns the films data as an object from the server created in the node modeule via the ```module.exports``` function back to the user.

Written in ES6 ```app.get('/api/films-data', (req, res) => res.send(getFilmData()));``` the ```app.get()``` method can be written in one line with an implicit return in the call back function. Note the syntax as there are several call back parenthesis! The first from get, the second from req-re and the final one from the get data from the node files!

You need to have the backend server running so run ```node src/back-end/app.js``` and then check the path you have set up in the google chrome browser search bar  [3000/films/data] and the data should display on the screen. At this stage we have not changed the back-end port to 3001. It is better to call this server.js rather than app.js, but for this project at this stage I have not refactored and renamed.

You Tube tutorials to review at this stage really useful to get the concepts of node and modules - it gives you a good theoretical understanding of node. Mosh on node [https://www.youtube.com/watch?v=TlB_eWDSMt4]

#### Challenge -20 Add nodemon
Install nodemon [yarn add nodemon] to hot-load backend 
In package-json change the script files and direct backend script to the file path you have created in node.js

```
"start-frontend": "react-scripts start",
		"start-backend": "file-path",
```
In the case of my app this is

```
"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/back-end/app.js",

```

#### Challenge -21 Create a client-side and server-side port in your local environment

If you use yarn you can get stuck in this challenge -  read this section of the npm documentation [https://libraries.io/npm/yarn-run-all] and see the code block at the end for what your scripts file should look like.

Install run-all [npm install npm-run-all] as a dev dependency [yarn add run-all]
This will allow you to run the ports for the frontend and backend servers in parallel, 

Read the documentation on ```npm -p``` and ```npm -s``` [https://www.npmjs.com/package/npm-run-all]
This highlights the difference between running the ports in sequence vs. in parallel.

Check the update on package-json - rename the scripts to start-frontend and start-backend so that you have 2 separate commands to run when you run the run-all command in your terminal

In app.js change the port for the backend to ```const port = 3001;```

Double check your scripts file - it should look like this with npm commands
```
"start": "npm-run-all -s build start-backend",
		"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/back-end/app.js",
		"start-dev": "npm-run-all -p start-frontend start-backend",
```

Go to your terminal and check that this works   [yarn run start-dev] or [yarn start-dev]  both should work, now check your two 2 servers 3000 and 3001 to ensure they are running at the same time.

#### Challenge -22, 24 & 25 Link the client-side react app and server-side express app

It is confusing to do these three challenges in the order provided by Kodiri - I have grouped them together as they are all related to moving data from the front-end to the backend and rendering all the props correctly in each of the components.

It is also not useful, in my opinion to set up the backend server ready for deploy when the components are not rendering the images correctly so one of the tasks in challenge 22 I have moved to challenge 23 which, in my opinion should be task 26 running after this section.

I found these resources really helped me unpick the confusing instructions set for these challenges.

Using the fetch API now get your data from the node environment you have created to store your data [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]

A handy YouTube Video that explains the fetch method[https://www.youtube.com/watch?v=v0t42xBIYIs] and the connectivity between the frontend react app and the backend node & express.

These are the steps I used to combine 22,24 and 25:-

Create a stateful component and use the lifecycle hook componentDidMount

```
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../App';
import '../../index';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			films: {}
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((filmsBackend) => {
				<!-- console.log(filmsBackend); -->
				let filmId = this.props.match.params.filmId;
				let films = filmsBackend.find((films) => films.id === filmId);
				this.setState({ films: films });
				<!-- console.log(this.state) -->
			})
			.catch((error) => console.log(error));
	}

```

1. To distinguish between the all the conflicting names of films, filmIds, filmsBackend is the data that comes from the node module exported into the express server and then is changed to JSOn in the response.

2. Check the data flows with a console.log(filmsBackend)

3. Now you are looking at assigning the filmId from the route path in the routes section to match the props and params of the filmId route path

4. Store films as a variable that will replace the backend data - the filmsBackend.find method is used to find the films.id from the node module export and it sets it as exactly equal to the filmId in the route path

5. Now state can be set to the films variable that has found the films.id from the node module - console.log(this.state) and check the data is flowing.

6. You might get errors at this stage if you have not migrated your image data to the backend 

7. In the node module check the image prop ```cover: 'dicte-film',``` and check that the name of the image file corresponds ```src/front-end/assets/dicte-film.jpeg``` also check that all the files are either jpeg or svg or png - as mixed file extensions will not work. 

8. Look at your render method now deconstruct and run a conditional render for mistypes to the page not found component.

```
let films = this.state.films;
		if (films === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else if (films.id) {
			return (
```

Use template literals to render the image jsx tag

```
<img
								alt={films.name}
								className="details-image"
								src={require(`../assets/${films.cover}.jpeg`)}
							/>
```							

Check the deconstructed props are rendering

```
<div className="details-description-review">
							<h2>{films.description}</h2>
							<p>{films.review}</p>
						</div>
```

Run another conditional render for a page loading message

```
<Link to="/">
						<h4>Back to home page</h4>
					</Link>
				</div>
			);
		} else {
			return (
				<div>
					<h2>Please wait this page is still loading</h2>
				</div>
```


9. At this stage the parent component (details should look like this)

```
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../App';
import '../../index';

export default class ScandiFilmDetails extends Component {
	constructor() {
		super();
		this.state = {
			films: {}
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((filmsBackend) => {
				console.log(filmsBackend);
				let filmId = this.props.match.params.filmId;
				let films = filmsBackend.find((films) => films.id === filmId);
				this.setState({ films: films });
			})
			.catch((error) => console.log(error));
	}
	render() {
		let films = this.state.films;
		if (films === undefined) {
			return <Redirect to="/pageNotFound" />;
		} else if (films.id) {
			return (
				<div className="film-details-container">
					<h1 className="details-header">{films.name}</h1>
					<div className="details-info">
						<div className="details-cover-container">
							<img
								alt={films.name}
								className="details-image"
								src={require(`../assets/${films.cover}.jpeg`)}
							/>
							<div className="details-image-overlay">
								<h2>{films.country}</h2>
							</div>
						</div>
						<div className="details-description-review">
							<h2>{films.description}</h2>
							<p>{films.review}</p>
						</div>
					</div>
					<Link to="/">
						<h4>Back to home page</h4>
					</Link>
				</div>
			);
		} else {
			return (
				<div>
					<h2>Please wait this page is still loading</h2>
				</div>
			);
		}
	}
}
```

Check to see if the error method works in the console, write it incorrectly to catch error as well, you should see the data pulling from the api-filmsData in the network tab. You can now delete the commented out code.

10. As this is the parent page you need to look at all the children rendering correctly as well.  The component which is mapping through the array of objects needs to changed to a stateful component. Here state is an array, to show the difference between state as an object and state as an array, I have renamed the array as ```filmsBackend[]``` in the map functions ensure props have both a key and an id to meet the React jsx syntax requirements. Deconstruct state ```	let films = this.state.filmsBackend;``` so that films when passed as a prop is named consistently.

```
import React, { Component } from 'react';
import FilmCatalog from './film-catalog-page';
import '../../App.css';
import '../../index.css';

export default class FilmCatalogGallery extends Component {
	constructor() {
		super();
		this.state = {
			filmsBackend: []
		};
	}
	componentDidMount() {
		fetch('/api/films-data')
			.then((res) => res.json())
			.then((filmsBackend) => {
				this.setState({ filmsBackend });
			})
			.catch((error) => console.log(error));
	}
	render() {
		let films = this.state.filmsBackend;
		return (
			<main className="films-container">
				<header className="header">
					<h1> Scandinavian-Noir Kodiri 's Kodflix Challenge</h1>
				</header>
				<div className="film-covers-container">
					{films.map((films) => (
						<FilmCatalog
							id={films.id}
							key={films.id}
							cover={films.cover}
							description={films.description}
							name={films.name}
							country={films.country}
						/>
					))}
				</div>
			</main>
		);
	}
}
```
Ensure that the child of the page renders props correctly - especially images with template literals and the file path

```
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../index.css';

function FilmCatalog({ id, cover, description }) {
	return (
		<Link to={`/${id}`} className="film-cover">
			<img alt={'scandinavian-noir-film-cover'} src={require(`../assets/${cover}.jpeg`)} />
			<div className="film-cover-overlay">
				<h5>{description}</h5>
			</div>
		</Link>
	);
}
export default FilmCatalog;

```
#### Challenge -23 enable the backend server for deploy 

Once you can see the component rendering in the way it is you can remove the commented out code and link the back-end data and the front-end rendering of the data. I think this challenge should be 26 coming after you understand the complex network of imports, stateful components, passing props down to child components and the React data flows from the backend node module, via express into the stateful components and then into the functional components.

Since there are several components this is the time that the app will break as the data is no longer 
linking from the front end files but need to be fetched and rendered from the backend node environment. Therefore rather that run this challenge at 23 when the app breaks and you waste significant amount of time figuring out the confusing maze of React components. I think it is useful to run the build and deploy environment only at this stage.

As a pre-deploy you need to run [yarn run build] to set up a build all packages file path to deploy to heroku. Add an env. file. [yarn add .env] and the proxy server should be joined as one file for heroku

Create a proxy connection and ensure you have added it to your package-json (under the scripts section - it is not part of dev dependencies or scripts) like so:-

```	},
	"proxy": "http://localhost:3001",
	"eslintConfig": {
		"extends": "react-app"
	},
```

This is not strictly necessary unless you are deploying to Heroku at this stage. You can still work in the dev environment. But if you want to deploy before you move the data from the node environment to a database these are the steps to follow.

Read the documentation on how to create a proxy Creating a proxy[https://create-react-app.dev/docs/proxying-api-requests-in-development]

Restart the servers - make sure that your data is flowing on port 3001 (as in task 19) and the front end is rendering in port 3000.

The back-end app.js should look like this at this stage

```
// imports the express library post once added to package
const express = require('express');
// initialises the app
const app = express();
// creates 3001 for backend and 3000 for FE
const port = process.env.PORT || 3001;
// imports path module to run static files from server to client
const path = require('path');
// imports node module from films-data file
const films = require('./api-filmsData');
// Sends object films.filmsData as a payload via the node module from the api file as filmsData
app.get('./api-filmsData/filmsData', (req, res) => res.send(films.filmsData));
// uses static files, routes joins them as one for deploy
app.use(express.static(path.join(__dirname, '../../build')));
// gets static files and sends them to the root - index.html - from a file path after build
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
// tests that port listens with msg on terminal
app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
```

The comments helped me de-bug each line as this was the stage where things were not working due to the confusing instructions and the jumping of tasks from front-end to backend to dev-ops to CSS.

It is very important that the app works in the way it is intended to work before deploy otherwise it will not render correctly on the heroku app.

So check your package JSOn at this stage it should look like this

```
{
	"name": "kodiri-kodflix",
	"version": "0.1.0",
	"private": true,
	"dependencies": {
		"cors": "^2.8.5",
		"dotenv": "^8.2.0",
		"express": "^4.17.1",
		"node": "^12.12.0",
		"nodemon": "^1.19.2",
		"npm-run-all": "^4.1.5",
		"react": "^16.8.6",
		"react-dom": "^16.8.6",
		"react-router-dom": "^5.0.1",
		"react-scripts": "3.0.1",
		"request-promise": "^4.2.4"
	},
	"scripts": {
		"start": "npm-run-all -s build start-backend",
		"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/back-end/app.js",
		"start-dev": "npm-run-all -p start-frontend start-backend",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"proxy": "http://localhost:3001",
	"eslintConfig": {
		"extends": "react-app"
	},
	"browserslist": {
		"production": [
			">0.2%",
			"not dead",
			"not op_mini all"
		],
		"development": [
			"last 1 chrome version",
			"last 1 firefox version",
			"last 1 safari version"
		]
	}
}
```
You are now ready to deploy OR set up the MongoDb database - challenge 26
