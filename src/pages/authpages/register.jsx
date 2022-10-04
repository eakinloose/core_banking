import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { FormWrapper } from "./authStyles";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import axios from "axios";

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const auth = useSelector((state) => state.auth);

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      coreBankingID: "",
      password: "",
      confirmPassword: "",
   });
   const [reg, setReg] = useState(true);
   const [inactive, setInactive] = useState(true);
   const [showPassword, setShowPassword] = useState(false);
   const [notStrong, setNotStrong] = useState("");
   const [checkingID, setCheckingID] = useState(false);

   useEffect(() => {
      if (auth._id) {
         navigate("/dashboard");
      }
   }, [auth._id, navigate]);

   useEffect(() => {
      const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (
         user.firstName == "" ||
         user.lastName == "" ||
         user.email == "" ||
         !user.email.match(emailRegEx) ||
         user.phone == "" ||
         user.coreBankingID == ""
      ) {
         setInactive(false);
      } else {
         setInactive(true);
      }
   }, [user]);

   const IDchecker = async (e) => {
      e.preventDefault();
      setCheckingID(true);
      await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setReg(false);
      setCheckingID(false);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if (user.password.match(passw) && user.password == user.confirmPassword) {
         setNotStrong("good");
         dispatch(registerUser(user));
      } else if (user.password == "" || user.confirmPassword == "") {
         setNotStrong("fields");
         const timer = setTimeout(() => {
            setNotStrong("");
         }, 3000);
         return () => clearTimeout(timer);
      } else if (user.password !== user.confirmPassword) {
         setNotStrong("unmatched");
         const timer = setTimeout(() => {
            setNotStrong("");
         }, 3000);
         return () => clearTimeout(timer);
      } else if (!user.password.match(passw)) {
         setNotStrong("bad");
         const timer = setTimeout(() => {
            setNotStrong("");
         }, 3000);
         return () => clearTimeout(timer);
      }
   };

   return (
      <FormWrapper>
         <form>
            {reg ? (
               <div className="title">
                  <h2>Register</h2>
                  <Link to="/" className="dashboard-link">
                  Return Home
                  </Link>
               </div>
            ) : (
               <div className="title">
                  <h2>Create Password</h2>
                  <p
                     className="entry"
                     onClick={() => {
                        setReg(true);
                     }}
                  >
                     Return to the Data entering page
                  </p>
               </div>
            )}
            {reg ? (
               <>
                  <input
                     type="text"
                     placeholder="First Name"
                     onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                     }
                  />
                  <input
                     type="text"
                     placeholder="Last Name"
                     onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                     }
                  />
                  <input
                     type="email"
                     placeholder="email"
                     onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                     }
                  />
                  <input
                     type="number"
                     placeholder="Phone number"
                     onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                     }
                  />
                  <input
                     type="text"
                     placeholder="Core Banking ID"
                     onChange={(e) =>
                        setUser({ ...user, coreBankingID: e.target.value })
                     }
                  />
                  {inactive ? (
                     <button onClick={IDchecker}>
                        {checkingID ? <ButtonLoader /> : "Validate ID"}
                     </button>
                  ) : (
                     <button
                        onClick={(e) => {
                           e.preventDefault();
                        }}
                        className="inactive"
                     >
                        Validate ID
                     </button>
                  )}
                  <br />
                  <p>
                     Already have an account?{" "}
                     <Link to="/login">Login here</Link>
                  </p>
               </>
            ) : (
               <>
                  <h3>Hello {user.firstName} please create a password</h3>
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="password"
                     onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                     }
                  />
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="Confirm password"
                     onChange={(e) =>
                        setUser({ ...user, confirmPassword: e.target.value })
                     }
                  />
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
                  <button onClick={handleSubmit}>
                     {auth.rigisterStatus === "pending" ? (
                        <ButtonLoader />
                     ) : (
                        "Register"
                     )}
                  </button>
                  {auth.registerStatus === "rejected" ? (
                     <p className="weak">{auth.registerError}</p>
                  ) : null}
                  {notStrong === "bad" ? (
                     <div className="weak">
                        <span>PASSCODE ERROR ! </span>
                        <span>
                           ensure uppercase, number and special character
                        </span>
                     </div>
                  ) : null}
                  {notStrong === "fields" ? (
                     <div className="weak">
                        <span>Empty input field</span>
                     </div>
                  ) : null}
                  {notStrong === "unmatched" ? (
                     <div className="weak">
                        <span>Password does not match</span>
                     </div>
                  ) : null}
               </>
            )}
         </form>
      </FormWrapper>
   );
};

export default Register;
