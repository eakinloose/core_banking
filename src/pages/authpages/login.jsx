import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FormWrapper } from "./authStyles";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.auth);

   const [forgotPassword, setForgotPassword] = useState(false);

   const [user, setUser] = useState({
      coreBankingID: "",
      password: "",
   });
   const [showPassword, setShowPassword] = useState(false);

   useEffect(() => {
      if (auth._id) {
         navigate("/dashboard");
      }
   }, [auth._id, navigate]);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loginUser(user));
   };

   return (
      <FormWrapper>
         <form onSubmit={handleSubmit}>
            <div className="title">
               <h2>Login</h2>
               <Link to="/" className="dashboard-link">
                  Return Home
               </Link>
            </div>
            <input
               type="text"
               placeholder="Core Banking ID"
               onChange={(e) => setUser({ ...user, coreBankingID: e.target.value })}
            />
            <input
               type={showPassword ? "text" : "password"}
               placeholder="password"
               onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <div className="psd">
               <div id="pswcheck">
                  {showPassword ? (
                     <span
                        onClick={() => {
                           setShowPassword(false);
                        }}
                     >
                        hide password{" "}
                     </span>
                  ) : (
                     <span
                        onClick={() => {
                           setShowPassword(true);
                        }}
                     >
                        show password{" "}
                     </span>
                  )}
               </div>
               <Link to="">Forgot password?</Link>
            </div>
            <button>
               {auth.loginStatus === "pending" ? <ButtonLoader /> : "Login"}
            </button>
            {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
            <p>
               Don't have an account? <Link to="/register">Register</Link>
            </p>
         </form>
      </FormWrapper>
   );
};

export default Login;
