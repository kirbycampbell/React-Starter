import React from "react";
const element = {
  something: <h1>Hello World</h1>,
  something_else: <h1>Howdy Ho</h1>
};
console.log(element.something_else.props.children);
