import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // clear all auth data
    navigate("/login", { replace: true });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
