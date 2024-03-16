// import React from "react";
// import "./Feedback.css";
// // import { Link } from "react-router-dom";

// const Feedback = () => {
//   return (
//     <div className="feedback">
//     <div className="container1">
//       <h1>Thanks for exploring AR-Webstore.</h1>
//       <div>
//         <form>
//           <div className="form-field">
//             <label>What did you like the most about AR-Webstore ?</label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">Rating: ★★☆☆☆

//             <label>
//               Will our 3D and AR features improve your shopping experience if we
//               integrate it on an online e-commerce store ?
//             </label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">
//             <label>
//               What are the other features that excites you to have them on
//               AR-Webstore ?
//             </label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//           <div className="form-field">
//             <label>Any other comments?</label>
//             <textarea
//               type="text"
//               placeholder="I would like to say ..."
//             ></textarea>
//           </div>
//         </form>
//       </div>
//     </div>
//     <div><a href="#about" class="takeit scrollto" style={{fontWeight:("bolder"),fontFamily:"monospace"}}>TAKE IT!</a></div>
//     </div>
//   );
// };

// export default Feedback;


// import React, { useState } from "react";
// import axios from "axios";
// import "./Feedback.css";

// const Feedback = () => {
//   const [email, setEmail] = useState("");
//   const [answers, setAnswers] = useState({
//     likedMost: "",
//     improveExperience: "",
//     excitingFeatures: "",
//     otherComments: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "email") {
//       setEmail(value);
//     } else {
//       setAnswers({
//         ...answers,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/review/save-review', { email, ...answers });
//       if (response.status === 201) {
//         console.log('Review saved successfully');
//         window.location ="/"

//         // Redirect or show a success message
//       } else {
//         console.error('Failed to save review');
//       }
//     } catch (error) {
//       console.error('Failed to save review', error);
//     }
//   };

//   return (
//     <div className="feedback">
//       <div className="container1">
//         <h1>Thanks for exploring AR-Webstore.</h1>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="form-field">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-field">
//               <label>What did you like the most about AR-Webstore ?</label>
//               <textarea
//                 name="likedMost"
//                 value={answers.likedMost}
//                 onChange={handleChange}
//                 placeholder="I would like to say ..."
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>
//                 Will our 3D and AR features improve your shopping experience if we
//                 integrate it on an online e-commerce store ?
//               </label>
//               <textarea
//                 name="improveExperience"
//                 value={answers.improveExperience}
//                 onChange={handleChange}
//                 placeholder="I would like to say ..."
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>
//                 What are the other features that excite you to have them on
//                 AR-Webstore ?
//               </label>
//               <textarea
//                 name="excitingFeatures"
//                 value={answers.excitingFeatures}
//                 onChange={handleChange}
//                 placeholder="I would like to say ..."
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>Any other comments?</label>
//               <textarea
//                 name="otherComments"
//                 value={answers.otherComments}
//                 onChange={handleChange}
//                 placeholder="I would like to say ..."
//               ></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//       <div>
//         <button className="takeit scrollto" style={{ fontWeight: "bolder", fontFamily: "monospace" }}>TAKE IT!</button>
//       </div>
//     </div>
//   );
// };

// export default Feedback;



// import React, { useState } from "react";
// import axios from "axios";
// import "./Feedback.css";
// import {  useLocation } from 'react-router-dom';


// const Feedback = () => {
//   const [question1, setQuestion1] = useState("");
//   const [question2, setQuestion2] = useState("");
//   const [question3, setQuestion3] = useState("");
//   const [question4, setQuestion4] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/review/uploadreview", {
//         email,
//       question1,
//         question2,
//         question3,
//         question4
//       });
//       window.location ="/"
//       // Redirect or show success message
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };
//   const location = useLocation();
//   const email = new URLSearchParams(location.search).get('email');
//   return (
//     <div className="feedback">
//       <div className="container1">
//         <h1>Thanks for exploring AR-Webstore.</h1>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="form-field">
//               <label>
//                 What did you like the most about AR-Webstore ?
//               </label>
//               <textarea
//                 type="text"
//                 value={question1}
//                 onChange={(e) => setQuestion1(e.target.value)}
//                 placeholder="I would like to say ..."
//                 required
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>
//                 Will our 3D and AR features improve your shopping
//                 experience if we integrate it on an online e-commerce
//                 store ?
//               </label>
//               <textarea
//                 type="text"
//                 value={question2}
//                 onChange={(e) => setQuestion2(e.target.value)}
//                 placeholder="I would like to say ..."
//                 required
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>
//                 What are the other features that excite you to have them
//                 on AR-Webstore ?
//               </label>
//               <textarea
//                 type="text"
//                 value={question3}
//                 onChange={(e) => setQuestion3(e.target.value)}
//                 placeholder="I would like to say ..."
//                 required
//               ></textarea>
//             </div>
//             <div className="form-field">
//               <label>Any other comments?</label>
//               <textarea
//                 type="text"
//                 value={question4}
//                 onChange={(e) => setQuestion4(e.target.value)}
//                 placeholder="I would like to say ..."
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//       <div>
//         <a
//           href="#about"
//           className="takeit scrollto"
//           style={{ fontWeight: "bolder", fontFamily: "monospace" }}
//         >
//           TAKE IT!
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

import React, { useState } from "react";
import axios from "axios";
import "./Feedback.css";
import { useLocation } from 'react-router-dom';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/review/uploadreview", {
        email,
        rating,
        question1,
        question2,
        question3,
        question4
      });
      window.location = "/"
      // Redirect or show success message
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  return (
    <section className="feedback" style={{height:"auto"}}>
    <div className="feedback">
      <div className="container1" style={{width:"70%",alignItems:"center",marginLeft:"15%"}}>
        <h1>Thanks for exploring AR-Webstore.</h1>
        <div>
          <form onSubmit={handleSubmit} >
            <div className="form-field">
              <label>
                What did you like the most about AR-Webstore ?
              </label>
              <textarea
                type="text"
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>
                Will our 3D and AR features improve your shopping
                experience if we integrate it on an online e-commerce
                store ?
              </label>
              <textarea
                type="text"
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>
                What are the other features that excite you to have them
                on AR-Webstore ?
              </label>
              <textarea
                type="text"
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label>Any other comments?</label>
              <textarea
                type="text"
                value={question4}
                onChange={(e) => setQuestion4(e.target.value)}
                placeholder="I would like to say ..."
                required
              ></textarea>
            </div>
            <div className="form-field">
  <label>Rate our service:</label>
  <div className="star-rating">
    <input type="radio" id="star5" name="rating" value="5" onClick={() => setRating(5)} />
    <label htmlFor="star5"></label>
    <input type="radio" id="star4" name="rating" value="4" onClick={() => setRating(4)} />
    <label htmlFor="star4"></label>
    <input type="radio" id="star3" name="rating" value="3" onClick={() => setRating(3)} />
    <label htmlFor="star3"></label>
    <input type="radio" id="star2" name="rating" value="2" onClick={() => setRating(2)} />
    <label htmlFor="star2"></label>
    <input type="radio" id="star1" name="rating" value="1" onClick={() => setRating(1)} />
    <label htmlFor="star1"></label>
  </div>
</div>
            <button type="submit"  className="takeit scrollto btn-get-started " style={{ fontWeight: "bolder", fontFamily: "monospace" ,backgroundColor:"transparent",marginTop:"50px"}}>GET IT!</button>
          </form>
        </div>
      </div>
      <div>
       
      </div>
    </div>
    </section>
  );
};

export default Feedback;
