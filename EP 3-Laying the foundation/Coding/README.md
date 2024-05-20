Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const header = React.createElement(
  "div",
  {
    className: "Title",
    key: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
      },
      "This is h1 Tag"
    ),
    React.createElement(
        "h2",
        {
          key: "h2",
        },
        "This is h2 Tag"
      ),
      React.createElement(
        "h3",
        {
          key: "h3",
        },
        "This is h3 Tag"
      )
  ]
);


 Q: Create the same element using JSX
const header = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
Q: Create a functional component of the same with JSX
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
Q: Pass attribute into the tag in JSX
const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"red"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"green"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"black"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
Q: Composition of Component (Add a component inside another)
const AnotherComponent = function(){
    return <h2> This is Another Component</h2>
}

const Header = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"red"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"green"}} key="h2">This is h2 tag</h2>
      <AnotherComponent/>
      <h3 style={{color:"black"}} key="h3">This is h3 tag</h3>
    </div>
  );
};
Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "black" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */}
      {element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */}
      <TitleElement/>
      <h2 style={{ color: "orange" }} key="h2">
        This is h2 tag
      </h2>
      {/* This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};