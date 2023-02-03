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
        {loggedUser? <span>Dkn-test-12345</span> :
        <span>{loggedUser.coreBankingID}</span>}
        <br/>
        {loggedUser? <span>dummy user</span> : <span id='name'>{loggedUser.firstName} {loggedUser.lastName}</span>}
        <br/>
        <br/>
        <button onClick={() => {dashLogout()}}>Log out</button>
      </div>
      <div>
      <p className='links' onClick={()=>{dispatch(maindashboard())}}>Main Dashboard</p>
      <p className='links' onClick={()=>dispatch(searchLoans())}>Search</p>
      <p className='links' onClick={()=>{dispatch(loans())}}>All Loans</p>
      <p className='links' onClick={()=>dispatch(loandashboard())}>Loan Applications </p>
      </div>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
    </SidebarWrapper>
  );
};

export default Sidebar;
