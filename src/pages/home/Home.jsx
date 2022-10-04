import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import NavBar from "../../components/Navbar/Navbar";
import { HomeContainer, HomeWrapper } from "./homeStyles";
import sim2 from "../../assets/images/sim2.png";
import sim3 from "../../assets/images/sim3.png";
import dcb from "../../assets/images/dcb.png";
import { ContactWrapper } from "../contact/contactStyles";

const Home = () => {
   const [mailData, setMailData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const { name, email, message } = mailData;
   const [error, setError] = useState(null);
   const onChange = (e) =>
      setMailData({ ...mailData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (name.length === 0 || email.length === 0 || message.length === 0) {
         setError(true);
         clearError();
      } else {
         emailjs
            .send(
               "service_xkianv2", // service id
               "template_clairg8", // template id
               mailData,
               "vHJd9ppaDziwlyfHz" // public api
            )
            .then(
               (response) => {
                  setError(false);
                  clearError();
                  setMailData({ name: "", email: "", message: "" });
               },
               (err) => {
                  console.log(err.text);
               }
            );
      }
   };

   const clearError = () => {
      setTimeout(() => {
         setError(null);
      }, 2000);
   };

   return (
      <HomeContainer>
         <NavBar />
         <HomeWrapper>
            <div className="hero-section">
               <div className="text-content">
                  <h1>
                     Stay financially connected with the best-in-class core
                     banking system
                  </h1>
                  <p>
                     Esse culpa non officia sint exercitation eu qui id sint ad
                     aute.Ea consequat pariatMagna cupidatat excepteur culpa eu
                     tempor cupidatat anim aliqua cupidatat proident commodo.ur
                     irure cillum nisi sint est aliqua velit tempor est et sit.
                  </p>
               </div>
               <div className="img-wrapper">
                  <img className="sim2" src={sim2} alt="sim2" />
                  <img className="sim3" src={sim3} alt="sim3" />
               </div>
            </div>
         </HomeWrapper>
         <div className="black-section">
            <div className="content">
               <h1>Exceptional banking app functionality</h1>
               <p>
                  Differentiate yourself from competitors, launch products and
                  services faster and compose your bank operations based on your
                  needs.
               </p>
               <div class="container">
                  <div class="row">
                     <div class="col-md-12 text-center">
                        <h2 class="animate-charcter">
                           {" "}
                           Denukan Core Banking Solution
                        </h2>
                     </div>
                  </div>
               </div>
               <img src={dcb} alt="chip" />
            </div>
         </div>
         <div>
            <ContactWrapper>
               <div className="contentWrapper">
                  <div className="mapwrapper">
                     <iframe
                        width={100}
                        height={100}
                        className="iframe"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=4,%20iya%20omolere%20street&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                     ></iframe>
                  </div>
                  <div className="form">
                     <form onSubmit={(e) => onSubmit(e)}>
                        <h1>CONTACT US</h1>
                        <span>
                           Mail:
                           <a href="mailto:info@denukan.com">
                              {" "}
                              info@denukan.com
                           </a>
                        </span>
                        <span>
                           Telephone:{" "}
                           <a href="tel:+2349030639862">+234 903 0639 862</a>
                        </span>
                        <input
                           id="name"
                           name="name"
                           onChange={(e) => onChange(e)}
                           value={name}
                           type="text"
                           className="form-control"
                           placeholder="YOUR NAME"
                           required=""
                        />
                        <input
                           id="email"
                           type="email"
                           name="email"
                           onChange={(e) => onChange(e)}
                           value={email}
                           className="form-control"
                           placeholder="YOUR EMAIL"
                           required=""
                        />

                        <textarea
                           id="comment"
                           name="message"
                           onChange={(e) => onChange(e)}
                           value={message}
                           className="form-control"
                           placeholder="YOUR MESSAGE"
                           required=""
                           defaultValue={""}
                           cols={65}
                           rows={5}
                        />
                        <button>send message</button>
                        <div className="form-message">
                           <div
                              className={
                                 error ? "empty_notice" : "returnmessage"
                              }
                              style={{
                                 display: error == null ? "none" : "block",
                              }}
                           >
                              <span>
                                 {error
                                    ? "Please Fill Required Fields"
                                    : "Your message has been received, We will contact you soon."}
                              </span>
                           </div>
                           <span className="output_message text-center font-weight-600 uppercase" />
                        </div>
                     </form>
                  </div>
               </div>
            </ContactWrapper>
         </div>

         <h1 className="h1">
            <span>make</span>
            <div class="message">
               <div class="word1">Transfers</div>
               <div class="word2">statement request</div>
               <div class="word3">loan application</div>
            </div>
         </h1>
         <div className="footer-wrapper">
            <div class="heading-frame">
               <h2>
                  DENUKAN
                  <br />
                  CORE BANKING SOLUTION
               </h2>
            </div>
         </div>
         <p className="end">&copy; Denukan Network Limited</p>
      </HomeContainer>
   );
};

export default Home;
