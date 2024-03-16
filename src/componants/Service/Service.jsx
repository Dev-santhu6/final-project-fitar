


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Document, Page } from 'react-pdf';

// // const Service = () => {
// //   const [images, setImages] = useState([]);
// //   // const [pdfUrl, setPdfUrl] = useState('');

// //   useEffect(() => {
// //     const fetchImages = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/admin/getimages');
// //         setImages(response.data?.images || []);
// //       } catch (error) {
// //         console.error('Error fetching images:', error);
// //       }
// //     };
// //     fetchImages();
// //   }, []);

// //   const handlePdfClick = async (url) => {
// //     setImages(url);
// //   };

// //   return (
// //     <div style={{ marginTop: "150px" }}>
// //       <h2>Image Gallery</h2>
// //       {images.map((image) => (
// //         <div key={image._id} className="image-item" style={{ marginRight: "1000px" }}>
// //           <div>
// //             <img src={image.url} alt={image} style={{ height: "300px", width: "300px" }} /> <br />
// //           </div>
// //           <div>
// //             <p>{image.version}</p>
// //             <p>{image.description}</p>
// //             <button onClick={() => handlePdfClick(image.Url)}>View PDF</button>
// //           </div>
// //         </div>
// //       ))}
// //       {images && (
// //         <div>
// //           <h2>PDF Viewer</h2>
// //           <Document file={images}>
// //             <Page pageNumber={1} />
// //           </Document>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Service;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Document, Page } from 'react-pdf';

// const Service = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handlePdfClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   return (
//     <div style={{ marginTop: "150px" }}>
//       <h2>Image Gallery</h2>
//       {images.map((image) => (
//         <div key={image._id} className="image-item" style={{ display: 'flex', alignItems: 'center' }}>
//           <div>
//             <img
//               src={image.url}
//               alt={image}
//               style={{ height: "300px", width: "300px", cursor: 'pointer' }}
//               onClick={() => handlePdfClick(image)}
//             /> <br />
//           </div>

//         </div>
//       ))}
//       {showPopup && selectedImage && (
//         <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: '9999' }}>
//           <h2>version:{selectedImage.version}</h2>
//           <p>{selectedImage.description}</p>
//           <button onClick={() => setShowPopup(false)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Service;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./Service.css"
// import "../../assets/css/style.css"
// import "../../assets/vendor/bootstrap/css/bootstrap.min.css";



// const Service = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handlePdfClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };
//   const handleimageClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   return (
//     <section className='releaseservice'>
//       <div>
//         <div style={{ marginTop: "100px" }} >
//           {images.map((image) => (
//             <div key={image._id} className="image-item" >
//               <div className='releaseimage'>
//                 <img
//                   src={image.url}
//                   alt={image}
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => handlePdfClick(image)}
//                 /> <br />
//                 <span className='blink' onClick={() => handleimageClick(image)}>click me!</span>
//               </div>

//             </div >
//           ))}

//           {showPopup && selectedImage && (
//             <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }} className='popup'>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
//                 <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: "white" }}>×</button>
//               </div >
//               <h6>version:{selectedImage.version}</h6>
//               <div className='para'>
//                 <p>description:{selectedImage.description}</p>
//               </div>
//               <div class="containerbtn">
//     <button className="btn-get-started scrollto buttonbtn">Button 1</button>
//     <button className="btn-get-started scrollto buttonbtn">Button 2</button>
//   </div>
//               <div className='arrow'></div>

//             </div>
//           )}
//           {showPopup && selectedImage && (
//   <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center'}} className='popup'>
//      <div style={{ display: 'flex',  marginBottom: '10px' }}>
//         <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: 'white' }}>×</button>
//       </div>
//     <div style={{ flex: '0 0 50%', paddingRight: '20px' }} className="image-item" >
//       <img src={selectedImage.url} alt={selectedImage} style={{  borderRadius: '5px' }} />
//     </div>
//     <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',width:"100%"}}>
     
//       <div>
//         <h6>Version: {selectedImage.version}</h6>
//         <p>Description: {selectedImage.description}</p>
//       </div>
//       <div className="containerbtn">
//         <button className="btn-get-started scrollto buttonbtn">Button 1</button>
//         <button className="btn-get-started scrollto buttonbtn">Button 2</button>
//       </div>
//     </div>
    
//   </div>
// )}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Service.css';
// import '../../assets/css/style.css';
// import '../../assets/vendor/bootstrap/css/bootstrap.min.css';

// const Service = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

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

//   const handlePdfClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   const handleimageClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/review/getverifiedreviews');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);
//   return (
//     <section className='releaseservice'>
//       <div>
//         <div style={{ marginTop: '100px' }}>
//           {images.map((image) => (
//             <div key={image._id} className='image-item'>
//               <div className='releaseimage'>
//                 <img
//                   src={image.url}
//                   alt={image}
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => handlePdfClick(image)}
//                 /> <br />
//                 <span className='blink' onClick={() => handleimageClick(image)}>click me!</span>
//               </div>
//             </div>
//           ))}
//           {showPopup && selectedImage && (
//             <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px', display: 'flex', alignItems: 'center' }} className='popup'>
//               <div style={{ display: 'flex', marginBottom: '10px' }}>
//                 <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: 'white' }}>×</button>
//               </div>
//               <div style={{ flex: '0 0 50%', paddingRight: '20px' }} className='image-item'>
//                 <img src={selectedImage.url} alt={selectedImage} style={{ borderRadius: '5px' }} />
//               </div>
//               <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
//                 <div>
//                   <h6>Version: {selectedImage.version}</h6>
//                   <p>Description: {selectedImage.description}</p>
//                 </div>
//                 <div className='containerbtn'>
//                   <button className='btn-get-started scrollto buttonbtn'>Button 1</button>
//                   <button className='btn-get-started scrollto buttonbtn'>Button 2</button>
//                 </div>
//               </div>
//               <div>
//       <h2>Service Page</h2>
//       {reviews.map((review) => (
//             <tr key={review._id}>
//               <td>{review.email}</td>
//               <td>{review.question1}</td>
//               <td>{review.question2}</td>
//               <td>{review.question3}</td>
//               <td>{review.question4}</td>
//               <td>{review.rating}</td>
//             </tr>
//           ))}
//     </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

















// //original
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./Service.css"
// import "../../assets/css/style.css"
// import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
// import { Link } from "react-router-dom";



// const Service = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

   

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);



//   const handlePdfClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };
//   const handleimageClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };


//   return (
//     <section className='releaseservice'>
//       <div>
//         <div style={{ marginTop: "100px" }} >
//           {images.map((image) => (
//             <div key={image._id} className="image-item" >
//               <div className='releaseimage'>
//                 <img
//                   src={image.url}
//                   alt={image}
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => handlePdfClick(image)}
//                 /> <br />
//                 <span className='blink' onClick={() => handleimageClick(image)}>click me!</span>
//               </div>

//             </div >
//           ))}
//           {showPopup && selectedImage && (
//             <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }} className='popup'>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
//                 <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: "white" }}>×</button>
//               </div >
//               <h6>version:{selectedImage.version}</h6>
//               <div className='para'>
//                 <p>description:{selectedImage.description}</p>
//               </div>
//               <div class="containerbtn">
//               < button className="btn-get-started scrollto buttonbtn"> <Link  to="/demo">DEMO</Link> </button>
//               <div><button className="btn-get-started scrollto buttonbtn" style={{fontWeight:("bolder"),fontFamily:"monospace"}} >Request!</button>

//       </div>  </div>
 
             
//                    </div>
//           )}
//         </div>
     
//       </div>
//     </section>
//   );
// };
// export default Service;
//import Shopform from "../shop/Shopregester"

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "./Service.css"
// import "../../assets/css/style.css"
// import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import Shopform from "../shop/Shopregester"; // Import the Shopform component

// const Service = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showShopForm, setShowShopForm] = useState(false); // Add state for showing the Shopform
//     const [reviews, setReviews] = useState([]);


//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handlePdfClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   const handleimageClick = (image) => {
//     setSelectedImage(image);
//     setShowPopup(true);
//   };

//   const handleRequestClick = () => {
//     setShowShopForm(true); // Show the Shopform when "Request!" button is clicked
//   };

//   const handleCloseShopForm = () => {
//     setShowShopForm(false); // Close the Shopform
//   };


//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/reviews');
//         // Filter only the reviews that are verified (isPost: true)
//         setReviews(response.data.filter(review => review.isPost));
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <section className='releaseservice'>
//       <div>
//         <div style={{ marginTop: "100px" }} >
//           {images.map((image) => (
//             <div key={image._id} className="image-item" >
//               <div className='releaseimage'>
//                 <img
//                   src={image.url}
//                   alt={image}
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => handlePdfClick(image)}
//                 /> <br />
//                 <span className='blink' onClick={() => handleimageClick(image)}>click me!</span>
//               </div>

//             </div >
//           ))}
//           {showPopup && selectedImage && (
//             <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }} className='popup'>
//               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
//                 <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: "white" }}>×</button>
//               </div >
//               <h6>version:{selectedImage.version}</h6>
//               <div className='para'>
//                 <p>description:{selectedImage.description}</p>
//               </div>
//               <div class="containerbtn">
//                 <button className="btn-get-started scrollto buttonbtn"> <Link to="/demo">DEMO</Link> </button>
//                 <div><button className="btn-get-started scrollto buttonbtn" style={{ fontWeight: ("bolder"), fontFamily: "monospace" }} onClick={handleRequestClick}>Request!</button></div>
//               </div>
//             </div>
//           )}
//           {showShopForm && <Shopform onClose={handleCloseShopForm} />} {/* Render Shopform if showShopForm is true */}
//         </div>
//         {reviews.map((review) => (
//           <li key={review._id}>
//             {review.email} - {review.question1} - {review.rating}
//           </li>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default Service;
////// mela irukkuru thu thandaa kadaisiya use panni

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Service.css"
import "../../assets/css/style.css"
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Shopform from "../shop/Shopregester"; // Import the Shopform component




const Service = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showShopForm, setShowShopForm] = useState(false); // Add state for showing the Shopform
  const [reviews, setReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userinfo'));
    setIsLoggedIn(userInfo ? true : false);
  }, []);
  const handleDemoButtonClick = () => {
    if (isLoggedIn) {
      window.location=('/demo');
    } else {
      window.location=('/login');
    }
  };



  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/getimages');
        setImages(response.data?.images || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/review/verifyreview');
  //       setReviews(response.data.filter(review => review.isPost)); // Filter only the reviews that are verified
  //     } catch (error) {
  //       console.error('Error fetching reviews:', error);
  //     }
  //   };
  //   fetchReviews();
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/review/verifyreview")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data); // Filter only the reviews that are verified
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);
  
  const handlePdfClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleimageClick = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const handleRequestClick = () => {
    setShowShopForm(true); // Show the Shopform when "Request!" button is clicked
  };

  const handleCloseShopForm = () => {
    setShowShopForm(false); // Close the Shopform
  };
  const formattedDate = new Date().toISOString().slice(0, 10);
  const getStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Full star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <section className='releaseservice' > 
     {/* // style={{height:"auto"}} */}
      <div>
        <div style={{ marginTop: "100px" }} >
          {images.map((image) => (
            <div key={image._id} className="image-item" > 
              <div className='releaseimage'>
                <img
                  src={image.url}
                  alt={image}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePdfClick(image)}
                /> <br />
                {/* <span className='blink' onClick={() => handleimageClick(image)}>click me!</span> */}
              </div>
              <div style={{width:"60%"}}>
  <div style={{marginLeft:"200px",listStyle:"none",display:"flex",gap:"30px" }}>
    {reviews.map((review) => (
      <li key={review.email} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <button style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px', border: 'none', background: 'blue', color: 'white', fontWeight: 'bold' }}>{review.email.charAt(0)}</button>
          <div>
            <strong>{review.email}</strong>
          </div>
        </div>
        <div style={{ marginBottom: '5px' }}>
          {review.question4}
        </div>
        <div>
  <strong>Rating:</strong> {getStarRating(review.rating)}
</div>

      </li>
    ))}
  </div>
</div>

            </div>
            
          ))}
          {showPopup && selectedImage && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px' }} className='popup'>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <button onClick={() => setShowPopup(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: "white" }}>×</button>
              </div>
              {formattedDate }
              <h6>version:{selectedImage.version}</h6>
              <div className='para'>
                <p>{selectedImage.description}</p>
              </div>
              <div class="containerbtn">
                {/* <button className="btn-get-started scrollto buttonbtn" onClick={handleDemoButtonClick}> <Link to="/demo">DEMO</Link> </button> */}
                <button className="btn-get-started scrollto buttonbtn" onClick={handleDemoButtonClick}> DEMO </button>

                <div><button className="btn-get-started scrollto buttonbtn" style={{ fontWeight: ("bolder"), fontFamily: "monospace" }} onClick={handleRequestClick}>Request!</button></div>
              </div>
            </div>
          )}
          {showShopForm && <Shopform onClose={handleCloseShopForm} />} {/* Render Shopform if showShopForm is true */}
        </div>
      </div>
     
    </section>
  );
};

export default Service;
