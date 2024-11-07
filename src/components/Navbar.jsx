import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Button from "./CustomButton";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const { userCtx, setUserCtx } = useContext(UserContext);

  return (
    <nav className="main-navbar">
      <CustomButton as="link" to="/" className="logo">
        NC News
      </CustomButton>
      <menu>
        {/* <TopicsDropdownButton /> */}
        <CustomButton as="link" to="/topics">
          Topics
        </CustomButton>
        {userCtx ? (
          <CustomButton
            onClick={() => {
              sessionStorage.clear();
              setUserCtx(null);
            }}
          >
            Logout
          </CustomButton>
        ) : (
          <CustomButton as="link" to="/login">
            Login
          </CustomButton>
        )}
      </menu>
    </nav>
  );
};

export default Navbar;
