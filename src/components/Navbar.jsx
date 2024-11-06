import { Link } from "react-router-dom";
import TopicsDropdownButton from "./TopicsDropdownButton";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { userCtx, setUserCtx } = useContext(UserContext);

  return (
    <nav className="main-navbar">
      <Link to="/" className="logo">
        NC News
      </Link>
      <menu>
        {/* <TopicsDropdownButton /> */}
        <Link to="/topics">Topics</Link>
        {userCtx ? (
          <button
            onClick={() => {
              sessionStorage.clear();
              setUserCtx(null);
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </menu>
    </nav>
  );
};

export default Navbar;
