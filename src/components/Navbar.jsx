import { Link } from "react-router-dom";
import TopicsDropdownButton from "./TopicsDropdownButton";

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <Link to="/" className="logo">
        NC News
      </Link>
      <menu>
        <TopicsDropdownButton />
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
      </menu>
    </nav>
  );
};

export default Navbar;
