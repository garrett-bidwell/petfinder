import React , { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
//import Pet from './Pet';
import { Router, Link } from "@reach/router";
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
//   return React.createElement("div", { id: "something-important" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mixed",
//     }),
//   ]);

//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="dog" breed="Havanese" />
//       <Pet name="Pepper" animal="bird" breed="Cockatiel" />
//       <Pet name="Doink" animal="cat" breed="Mix" />
//     </div>
//   );

const themeHook = useState('darkblue')

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar/>
        <Suspense fallback={<h1>Loading route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
    
  );
};

//render(React.createElement(App), document.getElementById("root"));
//render(<App />, document.getElementById("root"));
export default App;
