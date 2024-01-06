// Using Js to Mam=nipulate the DOM 

const h1=document.createElement("h1")
h1.innerHTML="Hello world from Javascript"

const rootforJs=document.getElementById("root");
root.appendChild(h1);



// Creating a Element 

const heading=React.createElement("h1",{},"Hello world from React");
const roots =ReactDOM.createElement(document.getElementById("root"))
roots.render(heading)




// Creating Nested React Elements 
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h2",{},"im an h2 tag"),
    ]),

    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h2",{},"im an h2 tag"),
    ]),
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)