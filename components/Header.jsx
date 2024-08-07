import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  // function fakeLogOut() {
  //   localStorage.removeItem("loggedin");
  // }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <CgProfile className="login-icon" />
        </Link>
        {/* <button onClick={fakeLogOut}>X</button> */}
      </nav>
    </header>
  );
};

export default Header;
