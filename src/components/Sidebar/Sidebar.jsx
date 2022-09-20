import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from "../../features/auth/authSlice";
import { SidebarWrapper } from "./sidebarStyles";
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { loandashboard, loans, maindashboard, searchLoans } from '../../features/display/displaySlice';


const Sidebar = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state)=> state.auth)

  const dashLogout = ()=> {
    dispatch(logoutUser(null));
  }

  return (
    <SidebarWrapper>
      <div>
        <div className='avt'/>
        <br/>
        <span>{loggedUser.coreBankingID}</span>
        <br/>
        <span id='name'>{loggedUser.firstName} {loggedUser.lastName}</span>
        <br/>
        <br/>
        <button onClick={() => {dashLogout()}}>Log out</button>
      </div>
      <div>
      <p onClick={()=>{dispatch(maindashboard())}}>Main Dashboard</p>
      <p onClick={()=>dispatch(searchLoans())}>Search Loans </p>
      <p onClick={()=>{dispatch(loans())}}>All Loans</p>
      <p onClick={()=>dispatch(loandashboard())}>Loan Applications </p>
      </div>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
    </SidebarWrapper>
  );
};

export default Sidebar;
