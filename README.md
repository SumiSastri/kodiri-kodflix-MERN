# Kodiri-Kodflix-MERN
Table of Contents

- Learing objectives
- What is the front-end
- What is the back-end
- How do the front-end and backe-end communicate?
- What is JSON
- What is Ajax & async JavaScript
- What is the JavaScript Event Loop
- ES-6 Promises vs. CallBacks
- ES-8 Async Await
- API's REST vs. SOAP

## Learning Objectives
Client-server request-response cycle - connecting the backend to the frontend.

#### What is the front-end?

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language), CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

#### What is the backend?

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored -  cookies/ authentication codes, etc. User data -  personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

#### How do the front-end and back-end communicate? Client-Server API communication

HTTP (hyper-text-transfer-protocol) is the protocol, standards or rules that connect the front-end(client-side) to the back-end (server-side).  HTTPS (hyper-text-transfer-protocol-secure) - encrypts the client-service request-response for enhanced security. This is done via an encryptation layer using SSL (secure sockets layer) or TLS (Transport Layer Security)

HTTP & HTTPS enable documents to be transported to and from browsers and back-end databases. It is the basis of data-exchange on the web. The browser (client) sends a request to the server (where documents are hosted) and the server sends a response. The request-response pattern (which is based on  a set of rules, standards or protocols) is the language of communicaton between client (browser, front-end) and server (back-end, databases). 

*  How do REQUESTS work?
- Via methods - GET, POST, PUT, DELETE.
GET - get documents and files from the server
POST - Post the data from the browser to the database in the server
PUT - Update the data from the browser with the new information in the server
DELETE - Delete the information sent from the browser in the database

- Via query-strings - after the URL with a question mark, there are query string parameters in key-value pairs

- Via the body of the request - you can see the request headers are encoded in the headers tab in network but you can still see all the data in the body of the request in the browser

- Via encrypted - HTTPS requests - only client-server share information in a secure way

* How do RESPONSES work

- Debugging 
To see this request-response pattern in the console, you can go to the "Network" tab.
- GO TO Server Status
The response that the server sends back is the HTTP server status messages 
Documentation [https://www.w3schools.com/tags/ref_httpmessages.asp]
100 series - information [ 100 continue - server has received headers, send the request body, 101 request to switch protocols from requester, 103 resume aborted PUT or POST requests]
200 series - success messages [ 200 successful response, 201 new resource created, 202, request accepted for processing - processing not completed]
300 series - redirects [307 temporary redirect, 301 moved permanently]
400 series - client errors messages from browser (404 not found, 403 forbidden, 401 unathorised)
500 series - server errors messages from servers [500 internal server error, 502 bad gateway, 504 gateway timeout]

- GO TO  Headers
 - request url
 - request method
 - server status dode
 - remote (IP) address
 - response headers - content type
 - request headers 

- GO TO Response  - you can see the document type and the body of the request sent in HTTP this is open and visible to anyone who looks at the network tab, therefore sensitive information now is only sent via HTTPS requests

* More resources:

MDN documentation[https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work] 
A good YouTube Video:  [https://www.youtube.com/watch?v=7_LPdttKXPc]

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

### What is Ajax and async JavaScript?

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

#### SOAP vs. REST?

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

### What is the MEAN-MERN stack?

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


### How to guide to connect the front-end react app to the node-express environment

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
In the data section the module you can write is fairly simple ```module.exports = function filmsData() {return {[{  }]}``` with the return statement returning an array of objects with your data enclosed.

In the app.js file the  ```app.get('path', function(request, response) { return response.send() })``` method, the first argument is the backend API url path you create. ```app``` refers to the express app that has been declared as a variable when you set up the backend server with express. The second argument is a call-back function that takes two arguements - request and response. The request is the information/data/ payload to the server. The call back function returns the ```response.send()``` method which returns the data/payload object (filmsData{}) from the server created in the node modeule via the ```module.exports``` function back to the user.

Written in ES6 ```app.get('/api-filmsData/filmsData', (req, res) => res.send(films.filmsData));``` the ```app.get()``` method can be written in one line with an implicit return in the call back function.

You need to have the backend server running so run ```node src/back-end/app.js``` and then check the path you have set up in the google chrome browser search bar  [3000/films/data] and the data should display on the screen. At this stage we have not changed the back-end port to 3001.

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

If you use yarn you can get stuck in this challenge -  read this section of the npm documentation [https://libraries.io/npm/yarn-run-all] and see the code block at the end for what your scripts file should look like

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

#### Challenge -22 Link the client-side react app and server-side express app

Create a proxy connection and ensure you have added it to your package-json (under the scripts section - it is not part of dev dependencies or scripts) like so:-

```	},
	"proxy": "http://localhost:3001",
	"eslintConfig": {
		"extends": "react-app"
	},
```

Read the documentation on how to create a proxy Creating a proxy[https://create-react-app.dev/docs/proxying-api-requests-in-development]

Restart the servers - make sure that your data is flowing on port 3001 (as in task 19) and the front end is rendering in port 3000

Now you can use the API methods in the CRUD lifecycle to use data you have shifted to the node environment using express as a runner. In the front end, you can now use the to fetch fetch method in your ```componentDidMount``` method in the react app to fetch data from the backend and replace the function in the react lifecycle method like so:-

Comment this out

```componentDidMount() {
		let filmId = this.props.match.params.filmId;
		let film = getFilms().find((film) => film.id === filmId);
		this.setState({ film });
	}
```
Using the fetch API now get your data from the node environment you have created to store your data [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch]

A handy YouTube Video that explains the fetch method[https://www.youtube.com/watch?v=v0t42xBIYIs] and the connectivity between the frontend react app and the backend node & express.

```
	componentDidMount() {
		fetch('./api-filmsData/filmsData')
			.then((res) => res.json())
			.then((res) => {
				this.setState({ res });
			})
			.catch((error) => console.log(error));
	}
```
Check to see if the function works in the console, write it incorrectly to catch error as well, you should see the data pulling from the api-filmsData in the network tab. You can now delete the commented out code and replace it with the fetch method to get all your data from the backend.

#### Challenge -23 enable the backend server for deploy 

Once you can see the component rendering in the way it is you can remove the commented out code and link the back-end data and the front-end rendering of the data.

Since there are several components this is the time that the app will break as the data is no longer 
linking from the front end files but need to be fetched and rendered from the backend node environment.

As a pre-deploy you need to run [yarn run build] to set up a build all packages file path to deploy to heroku. Add an env. file. [yarn add .env] and the proxy server should be joined as one file for heroku

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

The comments helped me de-bug each line as this was the stage where things were not working.
It is very important that the app works in the way it is intended to work before deploy otherwise it will not render correctly on the heroku app.

#### Challenge -24 add the images dynamically 

Introduce state and a constructor with a render method for the gallery component ```film-catalog-gallery``` replace the imports from react (importing the individual files from their location in the front-end assets folder).

Use template literals - read documentation here: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals]

#### Challenge -25 add loading image 

## Appendicies 
#### Appendix -1: How to set up a project with npm webpack build
Instead of npx create reactapp [appname] Web pack project set up 
If you install a package that you do not require [npm uninstall <package name>]
1.  [npm init] [yarn init] (this initializes npm. The password & other prompts are invisible, hit return on all compilers).  
2.  [npm install web-pack webpack-cli webpack-dev-server html-webpack-plugin –D] (installs webpack) 
3.  [npm install babel-loader style-loader css-loader sass-loader –D] (installs babel, css and sass pre-compilers or loaders)
4.  [npm install @babel/core @babel/preset-env –D] (installs the babel & env files - babel transpiles jsx into es6)
5   [npm install dotenv-webpack –D] (installs the env files and webpack)

Add the project files outside src folder
1. [touch .babelrc] (creates a babel file in project)
2. [touch webpack.config.js] (in the main file not in the src file)
3. [touch .env] (creates an env. file in project)

Add the source directory file and project files - structure src files according to project needs
1.   [mkdir src] (makes directory called source)
2.   [touch src/index.html src/app.js src/style.scss] (makes files for html, css and vanilla js) 

Add front-end libraries you might want [npm install <library name> -S]1. [npm install mapbox-gl –S] (installs mapbox)
2. [npm install bulma –S] installs bulma (as a project dependency not a compiler only a library)
3. [npm install node-sass –D] (installs sass - as a dev dependency as it is a complier)
4. [npm i jquery –S] (installs j-query)
5. [npm install react react-dom -S] (installs react and react dom)
6. [npm i react-router-dom –S] (installs the router component of react) 

Add backend dependencies and libraries
1. [npm install nodemon] (adds hot loading of backend server with nodemon)
2. [npm install node]  (adds node.js)
3. [npm install express] (install express.js midware that runs data from server via axios to Postman/ Insomnia)
4.  [npm add axios] (installs axios runner from backend with JSON files to Insomnia or Postman Axios no need to install body-parser any more, it comes inbuilt)
5. [npm install request-promise] [npm install request] (sets up back end API to get methods of request-promise from ES-6
6.[npm install mongoose] (adds mongoose.js to set up MongoDB Schemas)

#### Appendix-2 Some common CLI commands in yarn vs. npm

- [yarn add] [npm install] - (installs the package required on a project)
- [npm uninstall i](uninstall if the package not installed correctly)
- [yarn global add] [npm install global] (installs the package required on your OS)
- [yarn add node] -(installs node which it runs off)
- [yarn] [npm] start - (starts dev server)
- [yarn] [npm] run build - (builds static files for deployment [heroku] or other deployment packages)
- [yarn] [npm] test - (starts test runner)
- [yarn]/[npm] run eject - (IMPORTANT NO ROLL BACK -- removes the app and copies build dependencies, config files and scripts into the app directory)
- [npm update] - (updates packages)
- [npm outdated] (checks for outdated packages)
- [yarn run start backend]/ [yarn start:server]/ [npm run start backend]
- CLI documentation

[npm] CLI documentation link [https://docs.npmjs.com/cli-documentation/cli] 
[yarn] CLI documentation [https://yarnpkg.com/lang/en/docs/cli/]

#### Appendix -3: - my notes on CRUD

CREATE ONE NEW - POST -201 
createRoute is the function (Create) GET
Status is 201
Export the route 
Catch the error
In the config create the router set up
Then go to Insomnia (or your base url path)
Do a post request
Create the new animal object
Send
Booleans and numbers do not need inverted commas and boolean is lowercase
Create is a get request and a post

SHOW ONE - WITH ID - GET REQUEST - 200
showRoute() is the function
Show - get request and a post (Request and Show)
Status is 200 (ok)
Get the id
.findById(req.params.id) you do not the the exact id because you have already clocked them in other pathways
You need base_url/api/animals/5c87a2839f9ea114c58d524c
For all the id requests in router
router.route('/animals/:id')
  .get(animals.show)


EDIT AND UPDATE   - PUT 202
Find by Id and update one
In Insomnia - create object and only update key:value required to update


FIND  AND DELETE   - DELETE 204
Find by Id and delete one
Blow up one (by Id) Blow up all (Delete)
In Insomnia - remove all info and send


