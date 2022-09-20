import axios from "axios";
import React, { useState } from "react";
import { MainWrapper } from "../mainDashboard/maindashboardStyles";
import {FormWrapper } from "./LoanApplyStyles";

const url = "http://localhost:4000";

const LoanApply = () => {
   const [formData, setFormData] = useState({
      title: "",
      firstname: "",
      lastname: "",
      date_of_birth: "",
      bvn: "",
      marital_status: "",
      email: "",
      mobile_number: "",
      whatsapp: "",
      residential_address: "",
      city: "",
      state: "",
      residence_year: "",
      account_number: "",
      account_name: "",
      bank: "",
      present_employer: "",
      employer_address: "",
      occupation: "",
      experience_years: "",
      net_monthly_income: "",
      purpose: "",
      loan_amount_request: "",
      collateral_description: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post(`${url}/api/loan`, formData);
         form.reset();
      } catch (error) {
         console.log(error.response.data);
      }

      formData.reset();
   };

   return (
      <>
         <MainWrapper>
            <FormWrapper>

               <form className="form-apply" onSubmit={handleSubmit}>
                  <h3>Loan Application form</h3>
                  <p>Personal  Information</p>
                  <label htmlFor="title">Title</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                     }
                     value={formData.title}
                     type="text"
                     name="title"
                     id="title"
                  />

                  <br />
                  <label htmlFor="firstname">firstname</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, firstname: e.target.value })
                     }
                     value={formData.firstname}
                     type="text"
                     name="firstname"
                     id="firstname"
                  />

                  <br />
                  <label htmlFor="lastname">lastname</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, lastname: e.target.value })
                     }
                     value={formData.lastname}
                     type="text"
                     name="lastname"
                     id="lastname"
                  />

                  <br />
                  <label htmlFor="date_of_birth">date_of_birth</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, date_of_birth: e.target.value })
                     }
                     value={formData.date_of_birth}
                     type="text"
                     name="date_of_birth"
                     id="date_of_birth"
                  />

                  <br />
                  <label htmlFor="bvn">bvn</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, bvn: e.target.value })
                     }
                     value={formData.bvn}
                     type="number"
                     name="bvn"
                     id="bvn"
                  />

                  <br />
                  <label htmlFor="marital_status">marital_status</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           marital_status: e.target.value,
                        })
                     }
                     value={formData.marital_status}
                     type="text"
                     name="marital_status"
                     id="marital_status"
                  />

                  <br />
                  <label htmlFor="email">email</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                     }
                     value={formData.email}
                     type="text"
                     name="email"
                     id="email"
                  />

                  <br />
                  <label htmlFor="mobile_number">mobile_number</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, mobile_number: e.target.value })
                     }
                     value={formData.mobile_number}
                     type="number"
                     name="mobile_number"
                     id="mobile_number"
                  />

                  <br />
                  <label htmlFor="whatsapp">whatsapp</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                     }
                     value={formData.whatsapp}
                     type="number"
                     name="whatsapp"
                     id="whatsapp"
                  />

                  <br />
                  <label htmlFor="residential_address">residential_address</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           residential_address: e.target.value,
                        })
                     }
                     value={formData.residential_address}
                     type="text"
                     name="residential_address"
                     id="residential_address"
                  />

                  <br />
                  <label htmlFor="city">city</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                     }
                     value={formData.city}
                     type="text"
                     name="city"
                     id="city"
                  />

                  <br />
                  <label htmlFor="state">state</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                     }
                     value={formData.state}
                     type="text"
                     name="state"
                     id="state"
                  />

                  <br />
                  <label htmlFor="residence_year">residence_year</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           residence_year: e.target.value,
                        })
                     }
                     value={formData.residence_year}
                     type="number"
                     name="residence_year"
                     id="residence_year"
                  />

                  <p>Bank  Information</p>

                  <label htmlFor="account_number">account number</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           account_number: e.target.value,
                        })
                     }
                     value={formData.account_number}
                     type="number"
                     name="account_number"
                     id="account_number"
                  />

                  <br />
                  <label htmlFor="account_name">account_name</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, account_name: e.target.value })
                     }
                     value={formData.account_name}
                     type="text"
                     name="account_name"
                     id="account_name"
                  />

                  <br />
                  <label htmlFor="bank">bank</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, bank: e.target.value })
                     }
                     value={formData.bank}
                     type="text"
                     name="bank"
                     id="bank"
                  />
                  <p>Loan Information</p>
                  <label htmlFor="purpose">purpose</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, purpose: e.target.value })
                     }
                     value={formData.purpose}
                     type="text"
                     name="purpose"
                     id="purpose"
                  />

                  <br />
                  <label htmlFor="loan_amount_request">loan_amount_request</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           loan_amount_request: e.target.value,
                        })
                     }
                     value={formData.loan_amount_request}
                     type="text"
                     name="loan_amount_request"
                     id="loan_amount_request"
                  />

                  <br />
                  <label htmlFor="collateral_description">
                     collateral_description
                  </label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           collateral_description: e.target.value,
                        })
                     }
                     value={formData.collateral_description}
                     type="text"
                     name="collateral_description"
                     id="collateral_description"
                  />
                  <p>Other  Information</p>  
                  <label htmlFor="present_employer">present_employer</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           present_employer: e.target.value,
                        })
                     }
                     value={formData.present_employer}
                     type="text"
                     name="present_employer"
                     id="present_employer"
                  />

                  <br />
                  <label htmlFor="employer_address">
                     present employer address
                  </label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           employer_address: e.target.value,
                        })
                     }
                     value={formData.employer_address}
                     type="text"
                     name="employer_address"
                     id="employer_address"
                  />

                  <br />
                  <label htmlFor="occupation">occupation</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({ ...formData, occupation: e.target.value })
                     }
                     value={formData.occupation}
                     type="text"
                     name="occupation"
                     id="occupation"
                  />

                  <br />
                  <label htmlFor="experience_years">experience_years</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           experience_years: e.target.value,
                        })
                     }
                     value={formData.experience_years}
                     type="number"
                     name="experience_years"
                     id="experience_years"
                  />

                  <br />
                  <label htmlFor="net_monthly_income">net_monthly_income</label>
                  <br/>
                  <input
                     onChange={(e) =>
                        setFormData({
                           ...formData,
                           net_monthly_income: e.target.value,
                        })
                     }
                     value={formData.net_monthly_income}
                     type="text"
                     name="net_monthly_income"
                     id="net_monthly_income"
                  />
                  
                  <br/>
                  <br/>
                  <button>Submit</button>
               </form>
            </FormWrapper>
         </MainWrapper>
      </>
   );
};

export default LoanApply;
