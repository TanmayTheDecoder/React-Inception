const head = React.createElement("h1", {}, "Hello React!");
const foot = React.createElement(
  "h1",
  {},
  "A great Javascript library made by facebook devs."
);
const container = React.createElement("div", {}, [head, foot]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
