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
  -- $ cd ersclient  
  -- Open a new bash terminal in ersclient  
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

4.) Open a new terminal in react-create-app client (ersclient folder):  
  
  -- $ cd ersclient  
  -- $ npm start  

5.) Visit localhost:3001 in browser  


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