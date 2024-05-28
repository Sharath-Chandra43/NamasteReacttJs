What is a Microservice?


A)The idea is to split your application into a set of smaller, interconnected
services instead of building a single monolithic application. Each service handles
a specific job, like handling user accounts or managing payments. Inside each
service, there's a mini-world of its own, with its own set of rules (business
logic) and tools (adapters).


What is Monolith architecture?


A)In the past, we used to build large projects where everything was bundled
together. Imagine building an entire application where all the code—APIs, user
interface, database connections, authentication, even notification services—
resides in one massive project with single code base.



What is the difference between Monolith and Microservice?


A) monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services



Why do we need a useEffect Hook?


A)The useEffect Hook allows you to perform side effects in your components
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is dependency. 



What is Optional Chaining?

A)The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.




What is Shimmer UI?

A)The primary purpose of React Shimmer is to enhance the user experience during data loading. By providing a shimmer effect, React Shimmer keeps users engaged, offering a visual cue that content is being loaded



What is the difference between JS expression and JS statement

A)Statements create side effects to be useful, while expressions are values or execute to values.
Expressions are unique in meaning, while statements are two-sided in execution. For example, 1 has a certain value while go( ) may be executed or not.
Statements are the whole structure, while expressions are the building blocks. For example, a line or a block of code is a statement.


What is Conditional Rendering, explain with a code example

A)Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. 


Exm:
import React, { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;




What is CORS?
CORS (Cross-Origin Resource Sharing) is a security feature
implemented by browsers that restricts web pages from making requests to a
different origin (domain) than the one from which it was served. Therefore, when
trying to call Swiggy's API from localhost, the browser blocks the request due to
CORS restrictions.




What is async and await?
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise




What is the use of `const json = await data.json();` in getRestaurants()
A)The data object, returned by the await fetch(), is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await data.json(). data.json() is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.
