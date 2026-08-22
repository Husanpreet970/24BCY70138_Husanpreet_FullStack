//Experiment 1 — React Router with URL and Query Parameters
//Problem Statement
//Develop a React application using React Router that provides navigation between Home and About pages. The About page should accept a dynamic URL parameter and a query parameter and display their values on the webpage.

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about/101?search=React">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about/:key"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
