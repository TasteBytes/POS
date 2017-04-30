# TasteBytes POS with ExpressJS, NodeJS and Firebase SDK 3
A simple Point-of-sale application and website built with **ExpressJS** and **NodeJS**. The app features a **Firebase** backend and authentication. View the current release at <a href="https://tastebytes-e421e.appspot.com" target="_blank">tastebytes-e421e.appspot.com</a>.

- ExpressJS `4.15.2`
- Firebase SDK `3.7.5`
  - JSON Datastore
  - Simple email/password OAuth authentication. Support for Google/Twitter/Github possible later
- Heroku for app hosting
- Semantic UI with SASS
- Handlebars


CMPS 115 Class Files
--------
All class files can be found under the <a href="https://github.com/TasteBytes/dashboard/tree/master/CMPS115" target="_blank">CMPS115 folder</a>.

Quick Start
-----------

Ensure you have the latest version of node (node version > 7.6) and npm installed. You can install these @ https://nodejs.org/en/

```shell
$ git clone https://github.com/tasteBytes/pos
$ cd dashboard
$ npm install
$ npm run dev
```
The server will now be open at localhost:3000 and will restart with any changes to the project.


On Master push, the app will be updated @ <a href="https://tastebytes-pos.herokuapp.com" target="_blank">https://tastebytes-pos.herokuapp.com</a>.

Commands
--------

|Script|Description|
|---|---|
|`npm start`|Necessary command to deploy to google app engine.|
|`npm run dev`|Start the express server @ `localhost:3000`; watches for changes to re-run the server on change.|
|`npm test`|Run unit tests with Karma and Jasmine|
