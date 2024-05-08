import React from "react";
import { LoginFormPod } from "../pods/login/login-form.pod";
import { useLogin } from "../pods/login/use-login.pod";

export const LoginPageScene: React.FC = () => {
  const { username, setUsername, password, setPassword, handleNavigation } =
    useLogin();

  return (
    <LoginFormPod
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleNavigation={handleNavigation}
    />
  );
};
