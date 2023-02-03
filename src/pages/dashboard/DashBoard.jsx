import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoanApply from "../../components/LoanApply/LoanApply";
import Loans from "../../components/Loans/Loans";
import MainDashboard from "../../components/mainDashboard/MainDashboard";
import SearchLoans from "../../components/SearchLoans/SearchLoans";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topdashboard from "../../components/Topdashboard/Topdashboard";

const DashBoard = () => {
   const auth = useSelector((state) => state.auth);
   const loandash = useSelector((state) => state.display);
   const navigate = useNavigate();

   // useEffect(() => {
   //    if (!auth._id) {
   //       navigate("/");
   //    }
   // }, [auth._id, navigate]);

   return (
      <div>
         <Topdashboard />
         <Sidebar />
         {loandash.currentDisplay === "loandashboard" ? (
            <LoanApply />
         ) : loandash.currentDisplay === "loans" ? (
            <Loans />
         ) : loandash.currentDisplay === "searchloans" ? (
            <SearchLoans />
         ) : (
            <MainDashboard />
         )}
      </div>
   );
};

export default DashBoard;
