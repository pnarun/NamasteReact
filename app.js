import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => JS Object => HTMLElement(render)
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
// console.log(heading);

// JSX - is not HTML in JS - it is HTML-like or XML-like syntax
// JSX transpiled (converted) before it reaches the JS Engine - by PARCEL - Babel package - https://babeljs.io/
// JSX => React.createElement => ReactElement => JS Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React by JSX
  </h1>
  );
  
console.log(jsxHeading);

// React Component
// Class Based Component - OLD
// Functional Component - NEW way - A JS function that returns React element

// React Functional Component
// const HeadingComponent = () => {
//   return <h1 className="heading">Namste React by Functional Componet</h1>;
// };

// React element
const element = <span>React element</span>;

const title = (
  <h1 className="title" tabIndex="5">
    {element}
    Namaste React using JSX 2
  </h1>
);

// React component
const Title = () => (
  <h1 className="title" tabIndex="5">Namaste React using JSX</h1>
);

const number = 2000;

// React Component Composition - Putting one react component inside another react component
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <Title></Title>
    <h2>{number}</h2>
    {title}
    {Title()}
    { 2 + 8 }
    <h1 className="heading">Namaste React by Functional Component 2</h1>
  </div>
);

// Fetch root div from HTML 
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering React element 
// root.render(jsxHeading);

// Rendering React componet
root.render(<HeadingComponent2 />)