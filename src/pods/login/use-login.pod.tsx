import React from "react";
import { useNavigate } from "react-router-dom";
import { switchRoutes } from "../../core/router/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate(switchRoutes.landing);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleNavigation,
  };
};
