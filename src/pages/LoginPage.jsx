import React, { useContext, useState } from "react";
import { getUserByUsername } from "../utils/api";
import { UserCtx } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { setUserCtx } = useContext(UserCtx);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setIsProcessing(true);

    getUserByUsername(username)
      .then((data) => {
        sessionStorage.setItem("user", data.user.username);
        setUserCtx(data.user);
        navigate("/");
      })
      .finally(() => setIsProcessing(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isProcessing}
        />
        <footer>
          <button disabled={isProcessing}>Login</button>
        </footer>
      </label>
    </form>
  );
};

export default LoginPage;
