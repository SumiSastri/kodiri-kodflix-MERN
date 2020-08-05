# Kodiri-Kodflix-ERN (Express-React-Node-Section 2)

# CHALLENGES 18 TO 30

##### Challenge -18 Setting up the backend server with node and express

Change the folder structure once you need data in the back end.

Move all your files into 2 separate categories - FE (Front-end) and BE (Backend).

In the FE src folder - move all the components created and their folders
Reconfigure imports to all pages based on the new file/ folder structure run [npm run start] make sure the front end is still working as intended.

Start on the backend
[npm install express]
Set up express [https://expressjs.com/en/starter/hello-world.html]
Check that the port is listening [node src/back-end/app.js],
Refresh the browser and make sure that get message is working on the home route.

#### Challenge -19 reconfigure app files/ install node.js and express.js

Reconfigure project files with 2 source folders one for the frontend and one for the backend.
Install node and express in the project and check package-json to ensure they are added as dev-dependencies.

[npm init] (intialise the project)
[npm install node][npm install express -s]

With node.js the import-export methods in react.js do not work as they work in different ways.

With node.js, a node module, the method used is `require` once a module is described in the require method, it is assign it to a variable. Once the module is "required", or loaded, we can use the `module.exports` method.

Replace the `export default function getFilms() { return [{}]}` method which is react.js syntax with the node.js syntax.

There several methods you can use to fetch data and the syntax is described well in this article - Read [https://www.openmymind.net/2012/2/3/Node-Require-and-Exports/]

Notes on the above documentation:-
In the data section the module you can write is fairly simple `module.exports = function getFilmsData() {return {[{ }]}` with the return statement returning an array of objects with your data enclosed.

In the app.js file the `app.get('path', function(request, response) { return response.send() })` method, the first argument is the backend API url path you create. `app` refers to the express app that has been declared as a variable when you set up the backend server with express. The second argument is a call-back function that takes two arguments - request and response. The request is the information/data/ payload to the server. The call back function returns the `response.send()` method which returns the data/payload object `(getfilmsData{})` and returns the films data as an object from the server created in the node modeule via the `module.exports` function back to the user.

Written in ES6 `app.get('/api/films-data', (req, res) => res.send(getFilmData()));` the `app.get()` method can be written in one line with an implicit return in the call back function. Note the syntax as there are several call back parenthesis! The first from get, the second from req-re and the final one from the get data from the node files!

You need to have the backend server running so run `node src/back-end/app.js` and then check the path you have set up in the google chrome browser search bar [3000/films/data] and the data should display on the screen. At this stage we have not changed the back-end port to 3001. It is better to call this server.js rather than app.js, but for this project at this stage I have not refactored and renamed.

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

If you use yarn you can get stuck in this challenge - read this section of the npm documentation [https://libraries.io/npm/yarn-run-all] and see the code block at the end for what your scripts file should look like.

Install run-all [npm install npm-run-all] as a dev dependency [yarn add run-all]
This will allow you to run the ports for the frontend and backend servers in parallel,

Read the documentation on `npm -p` and `npm -s` [https://www.npmjs.com/package/npm-run-all]
This highlights the difference between running the ports in sequence vs. in parallel.

Check the update on package-json - rename the scripts to start-frontend and start-backend so that you have 2 separate commands to run when you run the run-all command in your terminal

In app.js change the port for the backend to `const port = 3001;`

Double check your scripts file - it should look like this with npm commands

```
"start": "npm-run-all -s build start-backend",
		"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/back-end/app.js",
		"start-dev": "npm-run-all -p start-frontend start-backend",
```

Go to your terminal and check that this works [yarn run start-dev] or [yarn start-dev] both should work, now check your two 2 servers 3000 and 3001 to ensure they are running at the same time.

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

7. In the node module check the image prop `cover: 'dicte-film',` and check that the name of the image file corresponds `src/front-end/assets/dicte-film.jpeg` also check that all the files are either jpeg or svg or png - as mixed file extensions will not work.

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

10. As this is the parent page you need to look at all the children rendering correctly as well. The component which is mapping through the array of objects needs to changed to a stateful component. Here state is an array, to show the difference between state as an object and state as an array, I have renamed the array as `filmsBackend[]` in the map functions ensure props have both a key and an id to meet the React jsx syntax requirements. Deconstruct state `let films = this.state.filmsBackend;` so that films when passed as a prop is named consistently.

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

```},
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
// imports path module to run both static and dynamic files
const path = require('path');
// imports node module from films-data file
const getFilmData = require('./api-filmsData');
// Sends object films.filmsData as a payload via the node module from the api file as filmsData
app.get('/api/films-data', (req, res) => res.send(getFilmData()));
// once the run build is run in public files are created in build, the static files are joined to this file
app.use(express.static(path.join(__dirname, '../../build')));
// gets the static css and javascript files and sends them to the root - index.html
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

#### Challenge -26 MongoDb set up

If you don't have Homebrew, install it - steps to install HomeBrew. Homebrew is a package manager for OS X.
Packages are bundles of source code distributed by developers of software, which can be compiled and installed on your machine.

1. Copy and paste the following command into the terminal, then hit enter

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Press `enter` at the prompt, and enter your password.
3. Once installation has finished type `brew doctor`. It should say `Your system is ready to brew.`
4. Update Homebrew: `brew update`

<br>

You are now ready to install mongo with Node. It's a non-relational (noSQL) database.
Install the community version the steps recommend installing it with homebrew
If you get stuck documentation [https://www.mongodb.com/download-center/community]

Install it with `homebrew`:

```sh
brew install mongodb
```

The program is saved by default in the file path /usr/local/var/mongodb
Run the following command to ensure you have a place for mongo to store the data for your databases:

```sh
sudo mkdir -p /data/db && sudo chown -R $(whoami)/data/db
note: whoamI is not a place holder it finds you from your users directory

OR

sudo mongod --dbpath /Users/your_name_placeholder/data/db
note: here Users is casesensitive and your name is a placeholder

```

To check everything is working type `mongod` in the terminal. It will print a lot of stuff on the screen. After a few moments you should see this line at the bottom:

```
I NETWORK [thread1] waiting for connections on port 27017
```

If you get a socket in use error code 100 Catalina update stack overflow guidance [https://stackoverflow.com/questions/47975929/socketexception-address-already-in-use-mongodb]

Here are some Catalina installation challenges - questions answered
[https://stackoverflow.com/questions/58283257/mongodb-doesnt-work-on-latest-mac-os10-15]
Here is a reddit thread
[https://www.reddit.com/r/mongodb/comments/d7takd/macos_x_catalina_105_beta_and_mongo_a_warning/]

Now that you have your database up and running - create a Db for Kodflix.

In the terminal [use dbName]
You will get a prompt [switched to dbName] - the name of the db yo uhave just created
In terminal now initialise your db as the user using this command

```
db.createUser({ user: 'dbName', pwd: 'dbName', roles: [ "readWrite", "dbAdmin" ] })
```

You have now created yourself as the new user of this db.

To visualise the data download Robot3T now called RoboMongo, Studio3T is free for 30 days, while Robot3T is free forever

Once downloaded you will find your Db in Robot 3T

Go to File -> Connect... and then click on Create (this is at the top of the tool bar not at the bottom as a button do not click connect)
Once you click create - On the first tab (Connection) just type the name of the connection. That's not important, but, for consistency reasons, let's call it kodflix. Leave everything else default. On the second tab(Authentication) enable perform authentication and type kodflix -tick the box and use kodflix as the username, password once again for consistency. Click the button test the modal should show the port and authentication working. Now save your db is connected.

#### Challenge -27 MongoDb creating a collection of data

First, let's create a new collection, which is the equivalent of a table in the classic relational database world. We'll have collection for each type of data. For now, just create a new collection called shows in robot3T by right clicking the connections tab and click create button.

Let's add some TV shows. Each entry of the collection is called a a document. As we had 6 films registered, we'll add 6 documents. Right click on the shows document you have created. Go to insert data - look at the prompt we receive an empty object, click on the validate button. It's asking us to enter a valid JSON object.

On our backend side, we were already storing an array of JSON object, to this is as simply as copying & pasting each of them into individual documents or instead of manually copy-pasting each tv show, you can do following:

In your terminal, navigate to the folder where you store file with tv shows array.
Edit your file, so you don't have anything apart from an array(no const or function).
Run this command: mongoimport --db kodflix --collection shows --type json --file nameOfYourFile.js --jsonArray
All your shows will be imported into shows collection of kodflix database.

The danger is you do not have an option to individually validate each so it is better to manually validate each record.

#### Challenge -28 MongoDb

READ[https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp][http://mongodb.github.io/node-mongodb-native/3.2/tutorials/connect/]
Understanding how assert works [https://stackoverflow.com/questions/28129223/node-js-assert-module-in-mongodb-driver-documentation]
Understanding the syntax and call back function within MongoDB [https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html]
