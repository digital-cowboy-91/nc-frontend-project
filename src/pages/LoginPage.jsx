import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useRequest } from "../hooks/useRequest";
import { getUserByUsername } from "../utils/api";
import UserList from "../components/UserList";
import Button from "../components/CustomButton";

const LoginPage = () => {
  const { setUserCtx } = useContext(UserContext);
  const [queries] = useSearchParams();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const { isProcessing, error, invoke } = useRequest(getUserByUsername);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    invoke({
      withArgs: [username],
      onSuccess: (res) => {
        const resUsername = res.user.username;

        sessionStorage.setItem("user", resUsername);
        setUserCtx(resUsername);

        navigate(queries.get("redirect") ?? "/");
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className="login-form card content-wrapper">
      <h1>LOGIN</h1>
      <UserList />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isProcessing}
      />
      {error && <p className="error">{error.message}</p>}
      <footer>
        <Button className="btn" disabled={isProcessing || !username}>
          Login
        </Button>
      </footer>
    </form>
  );
};

export default LoginPage;
