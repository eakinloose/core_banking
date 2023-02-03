import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoans } from "./loansSlice";
import ent from '../../assets/images/ent.png'

const Loansview = () => {
   useEffect(() => {
      dispatch(fetchLoans());
   }, []);

   const loansList = useSelector((state) => state.loan);
   const dispatch = useDispatch();
   const loggedUser = useSelector((state)=> state.auth);
   console.log(loggedUser)
   
   return (
      <div>
         {/* {loggedUser.coreBankingID} : {loggedUser.firstName} */}
         <h2>List of loans</h2>
         {/* <input
                     // onChange={(e) =>
                     //    setFormData({ ...formData, firstname: e.target.value })
                     // }
                     // value={formData.firstname}
                     type="text"
                     placeholder="Search"
                  /> */}
         {loansList.loading && <div>loading...</div>}
         {!loansList.loading && loansList.error ? (
            <div>{loans.error}</div>
         ) : null}
         {!loansList.loading && loansList.loans.length ? (
            <div>
               <h3>A total of {loansList.loans.length} has been disbursed</h3>
               <table id="table_id" class="display">
                  <thead>
                     <tr>
                        <th>Customer ID</th>
                        <th>Account Number</th>
                        <th>Account Name</th>
                        <th>Product Name</th>
                        <th>Tenor</th>
                        <th>Current Balance</th>
                        <th>Manage</th>
                     </tr>
                  </thead>
                  {loansList.loans.map((loan, index) => {
                     return (
                        <tbody key={index}>
                           <tr>
                              <td>{loan.id}</td>
                              <td>{loan.address.zipcode}</td>
                              <td>{loan.name}</td>
                              <td>
                                 <p>Loan</p>
                              </td>
                              <td>
                                 <p>12 Months</p>
                              </td>
                              <td>N{loan.address.geo.lat}</td>
                              <td>
                                 <button className = "manage"><div className="cont">
                                    <img src={ent} alt ="ent"/>
                                    <span>Manage</span></div></button>
                              </td>
                           </tr>
                        </tbody>
                     );
                  })}
               </table>
            </div>
         ) : null}
      </div>
   );
};

export default Loansview;
