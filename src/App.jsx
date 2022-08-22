import { useEffect  } from 'react'
import './App.css'
import Cakeview from './features/cake/Cakeview'
import Icecreamview from './features/icecream/Icecreamview'
import Userview from './features/user/Userview'
import { useDispatch } from "react-redux";
import { loadUser } from "./features/auth/authSlice";
import NavBar from './components/Navbar/Navbar'
import Login from './pages/authpages/login'
import Register from './pages/authpages/register'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar/>
        {/* <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route to="/not-found" />
          </Routes>
        </div> */}
     <Cakeview/>
     <Icecreamview/>
     <Userview/>
     <Login/>
     <Register/>
    </div>
  )
}

export default App
