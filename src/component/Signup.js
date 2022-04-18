import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setErr("Password must match");
    } else {
      signup(email, password, userName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Signup</h2>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        placeholder="Username"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        autoComplete="on"
      />
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        placeholder="Confirm Password"
        autoComplete="on"
      />
      {!isPending && <button className="btn">Submit</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p className="error">{error}</p>}
      {err && <p className="error">{err}</p>}
      <span>Already a user? <Link to={"/login"} className="link">Login</Link></span>
    </form>
  );
}
export default Signup;
