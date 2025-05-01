let l1Tag = React.createElement("li", {}, "Hello");
let l2Tag = React.createElement("li", {}, "World");

let Wrapper = React.createElement("ul", {}, [l1Tag, l2Tag]);

let rootEl = document.getElementById("root");

let root = ReactDOM.createRoot(rootEl); 

root.render(Wrapper);
