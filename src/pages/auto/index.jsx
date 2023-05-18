import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const creds = {
    login: "admin",
    password: "admin123",
  };

  const [inputValue, setInputValue] = useState({
    login: "",
    password: "",
  });

  const onLogin = () => {
    return (
      inputValue.login === creds.login && inputValue.password === creds.password
    );
  };
  return (
    <div className="res">
      <span>LOGIN</span>
      <input
        type="text"
        value={inputValue.login}
        onChange={(e) => {
          setInputValue({ ...inputValue, login: e.target.value });
        }}
      />
      <input
        type="text"

        value={inputValue.password}
        onChange={(e) => {
          setInputValue({ ...inputValue, password: e.target.value });
        }}
      />
      {onLogin() ? <Link to="/todos">
        <button className="ener" onClick={onLogin}>Go TodoList</button>
      </Link>
        : "..."}
    </div>
  );
};


