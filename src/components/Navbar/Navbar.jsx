import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";


const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>Home</h2>
      </Link>

      {auth._id? (
        <button
          onClick={() => {
            dispatch(logoutUser(null));
          }}
        >
          Log out
        </button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;