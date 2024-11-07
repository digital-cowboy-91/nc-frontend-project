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

  const { data, isProcessing, error, invoke } = useRequest(getUserByUsername);

  useEffect(() => {
    const resUsername = data?.user?.username;

    if (!resUsername) return;

    sessionStorage.setItem("user", resUsername);
    setUserCtx(resUsername);
    navigate(queries.get("redirect") ?? "/");
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    invoke(username);
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
