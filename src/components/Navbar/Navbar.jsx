import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { NavWrapper, NavContent, NavTop, NavBottom } from "./navbarStyles";
import logo from '../../assets/images/logo.png';


const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loggedUser = useSelector((state)=> state.auth)

  return (
    <NavWrapper>
      <NavContent>
          <Link to="/">
            <img src={logo}/>
          </Link>
          <div className="nav-content">
            <NavTop>
                <Link to="/dashboard"><span>See dashboard</span></Link>
            </NavTop>
            <NavBottom>
              <div className="nav-links">
                {auth._id? (
                  <div className="nav-links">
                  <button className="logout"
                    onClick={() => {
                      dispatch(logoutUser(null));
                    }}
                  >
                    Log out
                  </button>
                  <span id="name">{loggedUser.firstName} {loggedUser.lastName}</span>
                  </div>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </div>
              {/* <Link to="/contact-us"> */}
              <a href="mailto:info@denukan.com"><button className="contact">Contact Us</button></a>
              
              {/* </Link> */}
            </NavBottom>
          </div>
      </NavContent>
    </NavWrapper>
  );
};

export default NavBar;