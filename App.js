const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an H1 Element"),
      React.createElement("h2", {}, "I am an H2 Element"),
    ]),
    React.createElement("h1", {}, "I am an H1 Element"),
  ] //this is how we can pass the sibling
);

/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world 3 from React"
);  */ //it is just an object at the end of day
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
