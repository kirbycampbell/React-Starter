/* React with Mosh Readme:::

 Components are reusable elements.  
 The app.js holds a tree of components.  
 Component would be like navbar, tweets, profile, world, and feed.  
 Under feed could have a comment and like emoji. 

 Render puts out the DOM element.

1). Starting an app type in terminal in the folder for app: npm i -g create-react-app
2). type: create-react-app name-of-app  
and then cd name-of-app and then npm install and then npm start to run. 
 And then Delete all files within src if starting from scratch.

2b). Key Shortcuts - imrc for import react statement  and cc for class component declaration.

3). In Src folder make index.js and inside of that place this code:: */
import React from "react";
const element = <h1>Hello World</h1>;
console.log(element);

/* Type npm start, and then open developer tools, clicking arrow to open up. 
Check out the props.  
This is what Props are!  
Check out index1.js in React-starter-app for an example. 

Side Note on Javascript::: */
const activeJobs = jobs.filter(function(job) {
  return job.isActive;
}); //is same as:
const activeJobs = jobs.filter(job => job.isActive); //which is modern ES6 arrow function syntax.

/*

*/
