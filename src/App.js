import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Bookshelf from "./pages/Bookshelf";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <div className="topNav" style={{ textAlign: "center" }}>
        <ul class="nav nav-pills">
          <li class="active">
            {" "}
            <NavLink className="nav-link" to="/">
              Bookshelf
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="nav-link" to="/search">
              Library
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Bookshelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
