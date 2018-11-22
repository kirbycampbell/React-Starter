/* React with Mosh Readme:::

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 0). Components are reusable elements.  
 The app.js holds a tree of components.  
 Component would be like navbar, tweets, profile, world, and feed.  
 Under feed could have a comment and like emoji. 

//////////////////////////////////////////////////////////////////////

1). Starting an app type in terminal in the folder for app: 
*/ npm i -g create-react-app
/*
//////////////////////////////////////////////////////////////////////

2). type: 
*/ create-react-app name-of-app  
/*
and then cd name-of-app and then npm install and then npm start to run. 
 And then Delete all files within src if starting from scratch.

 //////////////////////////////////////////////////////////////////////

3). In Src folder make index.js and inside of that place this code:: */
import React from "react";
const element = <h1>Hello World</h1>;
console.log(element);

//////////////////////////////////////////////////////////////////////

/*
4). Type npm start, and then open developer tools, clicking arrow to open up. 
Check out the props.  This is what Props are!  
*/// An Example::
import React from "react";
const element = {
  something: <h1>Hello World</h1>,
  something_else: <h1>Howdy Ho</h1>
};
console.log(element.something_else.props.children);

//////////////////////////////////////////////////////////////////////

/*
5). Next add bootstrap to your project for sweet CSS */
npm i bootstrap
// and in index.js put:
import 'bootstrap/dist/css/bootstrap.css';

//////////////////////////////////////////////////////////////////////