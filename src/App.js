import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/math-quotes';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <nav className="navbar">
        <h1>Math Magicians</h1>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="nav-link">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/quotes" className="nav-link">
              Quote
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
