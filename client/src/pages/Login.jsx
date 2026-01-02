import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    if (username === "admin") {
      if (password === "admin@091") {
        localStorage.setItem("user", "admin");
        localStorage.setItem("role", "admin");
        navigate("/tasks");
      } else {
        alert("Invalid admin credentials");
      }
    } else {
      localStorage.setItem("user", username);
      localStorage.setItem("role", "user");
      navigate("/tasks");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login;
