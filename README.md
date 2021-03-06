# Egyptian-Rat-Screw-ReactCreateApp
This repository hosts a version of Egyptian Rat Screw the card game using React Create App as the front end development environment.  


# Hello Egyptian Rat Screw Team  

 -- Please use this readme to keep yourself updated on the current state of the app.  

# Current State of the App: 
  
 -- Early Development, Planning and Setting up development enviornment. 

 -- The backened express server and react create app enviornment is set up using ( https://daveceddia.com/create-react-app-express-backend/ ) as a guide.   

 -- Next we should set up:  
  -- FRONT END THINGS --   
  
    -- React Router (Single Page Application Routing)  
    -- Mobile responsive front end library ( Material UI? Bootstrap? TBD )  
    -- Setting up Redux for react.js state management ( Not needed right now, but will possibly need in future? )  
  
  -- BACK END THINGS --  
      
    -- Set up postgreSQL db enviornment ( I will start looking into this )  
    -- Look into settin up socket io on top of express server  
  
# To Run the Application in development:   

  -- $ git clone git@github.com:joemulick/Egyptian-Rat-Screw-ReactCreateApp.git  
  -- $ cd ers  
  -- $ npm install  
  -- $ cd ersclient  
  -- $ npm install  
  -- $ cd ..  
  -- $ PORT=3001 node bin/www (Leave this terminal running)  
  -- Open a new bash terminal
  -- $ cd ersclient  
  -- $ npm start  
  
Detailed explanation below:     
    
1.) Clone the Repo:  

  -- $ git clone git@github.com:joemulick/Egyptian-Rat-Screw-ReactCreateApp.git  

2.) Install all dependencies (Need to install two sets of dependencies):  

  -- $ cd ers  
  -- $ npm install
  
      AND  
  
  -- $ cd ersclient  
  -- $ npm install  

3.) Run the server (from the ers directory):  
  
  -- $ cd ..  
  -- $ PORT=3001 node bin/www ( leave this termainal running)
  -- The server is going to be running on PORT 3001 while the React Creat App will be running on PORT 3000  

4.) Open a new terminal, go inside the ersclient folder, and start the react create app server (the react create app directiry):  
  
  -- $ cd ersclient  
  -- $ npm start  

5.) Once you start the react create app client your browser should start up localhost:3000 automatically.

## Setting Up a Local Database
### Mac OSX
#### Install postgreSQL with Homebrew

    $ brew install postgresql

##### Start postgres via Homebrew
Running this command once will make postgres start up automatically any time you turn on your computer.

`brew services start postgresql`

To manually stop:

`brew services stop postgresql`

##### Start postgres via `pg_ctl`
For a one-time startup, use:

`pg_ctl -D /usr/local/var/postgres start`

To stop:

`pg_ctl -D /usr/local/var/postgres stop`

#### Create the Database

    $ createdb ers
    $ psql -d ers -f db/db_init.sql

This will create a database called `ers` and a role `ersAdmin` with all privileges granted on the database.

    role: ersAdmin
    password: dirtyRat

_See [this article](https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx) for more details._

__NOTE: No code exists to create an actual database yet.__

# The Stack:  
  
  Backend == Node.js / Express.js  (server script and API routing)  
  Backend == PostgreSQL (database)
    
  Frontend == React.js (Front End Library)  
  Frontend == Redux (State management for react)  
  Frontend == React Router (Single Page Application Routing)  
    
# Relevant reading material: 

Development Enviornment: 

- Create React App with an Express Backend ( https://daveceddia.com/create-react-app-express-backend/ )  
  * I used this guide previously to build a fullstack react app.
- Good [post](https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www) about using socket.io


<p align="center">
	<br><br>
  <img src='https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/Flowchart.jpeg'>
  </p>
  	<br><hr><br>
  	<p align="center">
  <img src='https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/wireframe.jpg'>
</p>
  	<br><hr><br>
  	<p align="center">
  <img src='https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/searching.jpg'>
</p>
  	<br><hr><br>
  	<p align="center">
  <img src='https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/gameplay.jpg'>
</p>
  	<br><br>


<!-- ![Alt text](https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/Flowchart.jpeg "Egyptian Rat Screw Flowchart Layout")  
<return>
![Alt text](https://raw.githubusercontent.com/joemulick/Egyptian-Rat-Screw-ReactCreateApp/master/wireframe.jpg "Egyptian Rat Screw Homepage Layout")  
<return>
![Alt text](https://user-images.githubusercontent.com/20348042/33861232-985e5910-de91-11e7-97a4-2201336983cb.jpg "Egyptian Rat Screw Game Search Layout")  
<return>
![Alt text](https://user-images.githubusercontent.com/20348042/33861231-97769828-de91-11e7-8892-18a0cadade6f.jpg "Egyptian Rat Screw Game In Game Layout")

 -->
