import { useEffect  } from 'react'
import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadUser } from "./features/auth/authSlice";
import Login from './pages/authpages/login';
import Register from './pages/authpages/register';
import Home from './pages/home/Home';
import DashBoard from './pages/dashboard/DashBoard';
import Page404 from './pages/404/Page404';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  const theme = {
    colors : {
      white: "#ffffff",
      black: "#000000",
      primary: "#173361",
      button: "#2160c5",
      buttonhover: "#3f75cc",
      grey01: "#fbfbfb",
      grey02: "#e2e2e2",
      inputhover: "#f3f0f0c3",
      transparent: "transparent",
      green: "#02b35a",
   }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/contact-us" element={<Contact />} /> */}
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
    </ThemeProvider>
  )
}

export default App
