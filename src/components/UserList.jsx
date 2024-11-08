import React, { useEffect } from "react";
import { useRequest } from "../hooks/useRequest";
import { getUsers } from "../utils/api";
import Spinner from "./Spinner";

const UserList = () => {
  const {
    data: users,
    isProcessing,
    error,
    invoke,
  } = useRequest(getUsers, {
    defaultIsProcessing: true,
  });

  useEffect(() => {
    invoke({ onSuccess: (res) => res.users });
  }, []);

  if (isProcessing) return <Spinner />;
  if (error) return <code>{JSON.stringify(error)}</code>;

  return (
    <code className="code-info">
      For test purpose, you can use any of the following usernames:
      <ul>
        {users.map(({ username }) => (
          <li key={username}>- {username}</li>
        ))}
      </ul>
    </code>
  );
};

export default UserList;
