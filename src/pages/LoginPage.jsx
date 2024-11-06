import React, { useContext, useState } from "react";
import { getUserByUsername } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { setUserCtx } = useContext(UserContext);
  const navigate = useNavigate();
  const [queries, setQueries] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();

    setIsProcessing(true);

    getUserByUsername(username)
      .then((data) => {
        const username = data.user.username;
        sessionStorage.setItem("user", username);
        setUserCtx(username);
        navigate(queries.get("redirect") ?? "/");
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
