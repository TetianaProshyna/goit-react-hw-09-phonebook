import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";

import authOperations from "../../redux/auth/authOperations";

export default function RegistrationView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <Container>
      <form className="regForm" onSubmit={handleSubmit}>
        <h2 className="regTitle">Registration</h2>
        <label className="regFormLabel">
          <span>Name</span>
          <input
            className="regInput"
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
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
        <button className="regBtn">Sign up</button>
      </form>
    </Container>
  );
}
