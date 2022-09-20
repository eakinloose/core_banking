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
   const [reg, setReg] = useState(true);

   const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: 0,
      coreBankingID: "",
      password: "",
   });

   const [inactive, setInactive] = useState(true);
   const [showPassword, setShowPassword] = useState(false);
   const [notStrong, setNotStrong] = useState("");
   const [checkingID, setCheckingID] = useState(false);

   // a state of password validation
   useEffect(() => {
      if (auth._id) {
         navigate("/dashboard");
      }
   }, [auth._id, navigate]);

   useEffect(() => {
      if (
         user.firstName == "" ||
         user.lastName == "" ||
         user.email == "" ||
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
      if (
         user.firstName == "" ||
         user.lastName == "" ||
         user.email == "" ||
         user.phone == "" ||
         user.coreBankingID == "" ||
         user.password == ""
      ) {
         setNotStrong("fields");
         const timer = setTimeout(() => {
            setNotStrong("");
         }, 1000);
         return () => clearTimeout(timer);
      } else if (user.password.match(passw)) {
         setNotStrong("good");
         dispatch(registerUser(user));
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
            <div className="title">
               <h2>Register</h2>
               <Link to="/" className="dashboard-link">
                  click here to return back to the home page
               </Link>
            </div>
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
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="password"
                     onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
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
               </>
            )}
         </form>
      </FormWrapper>
   );
};

export default Register;
