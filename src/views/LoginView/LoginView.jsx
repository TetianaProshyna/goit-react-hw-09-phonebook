import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

import Container from "../../components/Container/Container";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <form className="regForm" onSubmit={handleSubmit}>
        <h2 className="regTitle">Login</h2>
        <label className="regFormLabel">
          <span>Email</span>
          <input
            className="regInput"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label className="regFormLabel">
          <span>Password</span>
          <input
            className="regInput"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="regBtn">Login</button>
      </form>
    </Container>
  );
}
