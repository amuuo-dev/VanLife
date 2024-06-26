import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Vans from "../components/Vans";
import "../server"; // Import the server
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">
            #VanLife
          </Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
