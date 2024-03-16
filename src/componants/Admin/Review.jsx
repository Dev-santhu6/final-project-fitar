// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getreview');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <div   style={{marginTop:"100px"}}>
//       {reviews.map((review) => (
//         <div key={review._id} style={{ marginBottom: '20px', border:"3px solid black", width:"25%" ,fontFamily:"monospace", overflow: "auto", whiteSpace: "nowrap"}}>
//             <p>Email: {review.email}</p>
//             <p>Question 1: {review.question1}</p>
//             <p>Question 2: {review.question2}</p>
//             <p>Question 3: {review.question3}</p>
//             <p>Question 4: {review.question4}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getreview');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <div style={{ marginTop: "100px" }}>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Question 1</th>
//             <th>Question 2</th>
//             <th>Question 3</th>
//             <th>Question 4</th>
//             <th>rating</th>

//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.email}</td>
//               <td>{review.question1}</td>
//               <td>{review.question2}</td>
//               <td>{review.question3}</td>
//               <td>{review.question4}</td>
//               <td>{review.rating}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reviews;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getreview');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/review/deletereview/${email}`);
//       setReviews(reviews.filter((review) => review.email !== email));
//     } catch (error) {
//       console.error('Error deleting review:', error);
//     }
//   };
//   const handleAddReview = (email) => {
//     localStorage.setItem('selectedReview', email);
//   };
//   return (
//     <div style={{ marginTop: "100px" }}>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Question 1</th>
//             <th>Question 2</th>
//             <th>Question 3</th>
//             <th>Question 4</th>
//             <th>Rating</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.email}</td>
//               <td>{review.question1}</td>
//               <td>{review.question2}</td>
//               <td>{review.question3}</td>
//               <td>{review.question4}</td>
//               <td>{review.rating}</td>
//               <td>
//                 <button onClick={() => handleDelete(review.email)}>Delete</button>
//                 <button onClick={() => handleAddReview(review.email)}>Add Review</button>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reviews;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getreview');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   const handleDelete = async (email) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/review/deletereview/${email}`);
//       setReviews(reviews.filter((review) => review.email !== email));
//     } catch (error) {
//       console.error('Error deleting review:', error);
//     }
//   };

//   // const handleVerifyReview = async (email) => {
//   //   const updatedReviews = reviews.map((review) =>
//   //     review.email === email ? { ...review, isPost: true } : review
//   //   );
//   //   setReviews(updatedReviews);
//   //   try {
//   //     await axios.put(`http://localhost:5000/api/review/verifyreview/${email}`);
//   //   } catch (error) {
//   //     console.error('Error verifying review:', error);
//   //   }
//   // };
  
//   const handleVerify = async (email) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/review/verifyreview/${email}`, { ispost: true });
//       setReviews(reviews.map(review => review.email === email ? response.data : review));

//     } catch (error) {
//       console.error('Error verifying mechanic:', error);
//     }
//   };
//   return (
//     <div style={{ marginTop: '100px' }}>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Question 1</th>
//             <th>Question 2</th>
//             <th>Question 3</th>
//             <th>Question 4</th>
//             <th>Rating</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.email}</td>
//               <td>{review.question1}</td>
//               <td>{review.question2}</td>
//               <td>{review.question3}</td>
//               <td>{review.question4}</td>
//               <td>{review.rating}</td>
//               <td>
//                 <button onClick={() => handleDelete(review.email)}>Delete</button>
//                 {/* {!review.isPost && (
//                   <button onClick={() => handleVerifyReview(review.email)}>Verify Review</button>
//                 )} */}
//                 <button className="btn btn-success btn-sm" onClick={() => handleVerify(review.email)}>Verify <i class="bi bi-patch-check"></i></button>


//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reviews;

//qrgregwrhgwrhtrwhrtherhrh        mela irukkirathu thanda muthalla use pannathu
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminPage = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getreview');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   const handleVerify = async (email) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/review/updatereview/${email}`, { ispost: true });
//       setReviews(reviews.map(review => review.email === email ? response.data : review));
//     } catch (error) {
//       console.error('Error verifying review:', error);
//     }
//   };
  

//   return (
//     <div style={{ marginTop: '100px' }}>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Question 1</th>
//             <th>Question 2</th>
//             <th>Question 3</th>
//             <th>Question 4</th>
//             <th>Rating</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.email}</td>
//               <td>{review.question1}</td>
//               <td>{review.question2}</td>
//               <td>{review.question3}</td>
//               <td>{review.question4}</td>
//               <td>{review.rating}</td>
//               <td>
//                 <button className="btn btn-success btn-sm" onClick={() => handleVerify(review.email)}>Verify <i className="bi bi-patch-check"></i></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPage;

//////mela irukkurathu kadaisiya use pannathuuuu

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/review/getreview');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleVerify = async (email) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/review/updatereview/${email}`, { ispost: true });
      setReviews(reviews.map(review => review.email === email ? response.data : review));
    } catch (error) {
      console.error('Error verifying review:', error);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:5000/api/review/deletereview`, { data: { email } });
      setReviews(reviews.filter(review => review.email !== email));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Question 4</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <td>{review.email}</td>
              <td>{review.question1}</td>
              <td>{review.question2}</td>
              <td>{review.question3}</td>
              <td>{review.question4}</td>
              <td>{review.rating}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => handleVerify(review.email)}>Verify <i className="bi bi-patch-check"></i></button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(review.email)}>Delete <i className="bi bi-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;





