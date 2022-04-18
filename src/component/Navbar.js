import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="title">Login App</li>

        {!user && (
          <>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Signup</Link></li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li><button className="btn-logout" onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
