import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import { FormWrapper } from "./authStyles";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0,
    host: "",
  });
  const [notStrong, setNotStrong] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // a state of password validation

  useEffect(() => {
    if (auth._id) {
      navigate("/dashboard");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(user.password == "" || user.name == "" || user.email == "" || user.phone == "" || user.host == ""){
      setNotStrong("fields")
      const timer = setTimeout(() => {
        setNotStrong("")
      }, 1000);
      return () => clearTimeout(timer);
    }
    else if ((user.password.match(passw))) {
      setNotStrong("good")
      dispatch(registerUser(user));
    }
    else if (!user.password.match(passw)){
      setNotStrong("bad")
      const timer = setTimeout(() => {
        setNotStrong("")
      }, 3000);
      return () => clearTimeout(timer);
    }
    // if statement to cheeck if password is a valid type using ragex 
    // if password is not valid set that state to true for 3 secnds

  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Register</h2>
          <Link to="/dashboard" className="dashboard-link">Have a feel of what our dashboard looks like</Link>
        </div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="host"
          onChange={(e) => setUser({ ...user, host: e.target.value })}
        />
        <input
          type="number"
          placeholder="Phone number"
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div id="pswcheck">
        {showPassword ? <span onClick={()=>{setShowPassword(false)}}>hide password </span>: <span onClick={()=>{setShowPassword(true)}}>show password </span>}
        </div>
        <button>
          {auth.rigisterStatus === "pending" ? <ButtonLoader/>: "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
          <p className="weak">{auth.registerError}</p>
        ) : null}
        {notStrong === "bad" ? (
          <div className="weak">
            <span>PASSCODE ERROR ! </span>
            <span>ensure uppercase, number and special character</span>
          </div>
        ) : null}
        {notStrong === "fields" ? (
          <div className="weak">
            <span>Empty input field</span>
          </div>
        ) : null}
        {/* show error state for password herebased on the state */}
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </FormWrapper>
  );
};

export default Register;