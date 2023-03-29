import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/calculator";
import Quotes from "./components/math-quotes";
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>
  </BrowserRouter>
);

export default App;
