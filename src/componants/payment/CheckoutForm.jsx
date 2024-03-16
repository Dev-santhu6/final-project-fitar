// // // import React from 'react';
// // // import { CardElement, useStripe } from '@stripe/react-stripe-js';
// // // import axios from 'axios';

// // // const CheckoutForm = () => {
// // //   const stripe = useStripe();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const { token } = await stripe.createToken();

// // //     try {
// // //       const response = await axios.post('http://localhost:5000/api/payment/payment', {
// // //         amount: 1000, // Example amount (in cents)
// // //         currency: 'usd',
// // //         paymentMethodId: token.id,
// // //       });

// // //       console.log(response.data);
// // //     } catch (err) {
// // //       console.error(err.response.data.error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <CardElement />
// // //       <button type="submit">Pay</button>
// // //     </form>
// // //   );
// // // };

// // // export default CheckoutForm;

// // // CheckoutForm.jsx
// // // components/CheckoutForm.js

// // // import React from 'react';
// // // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // // import axios from 'axios';

// // // const CheckoutForm = () => {
// // //   const stripe = useStripe();
// // //   const elements = useElements();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!stripe || !elements) {
// // //       console.error('Stripe.js has not yet loaded.');
// // //       return;
// // //     }

// // //     const cardElement = elements.getElement(CardElement);

// // //     if (!cardElement) {
// // //       console.error('Card element not found.');
// // //       return;
// // //     }

// // //     const { token, error } = await stripe.createToken(cardElement);

// // //     if (error) {
// // //       console.error(error.message);
// // //       return;
// // //     }

// // //     try {
// // //       const response = await axios.post('http://localhost:5000/api/payment/payments', {
// // //         amount: 1000, // Example amount (in cents)
// // //         currency: 'usd',
// // //         token: token.id,
// // //       });

// // //       console.log(response.data);
// // //     } catch (err) {
// // //       console.error(err.response.data.error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <CardElement />
// // //       <button type="submit">Pay</button>
// // //     </form>
// // //   );
// // // };

// // // export default CheckoutForm;

// // import React, { useState } from 'react';
// // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// // import axios from 'axios';
// // // import { useHistory } from 'react-router-dom';

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!stripe || !elements) {
// //       console.error('Stripe.js has not yet loaded.');
// //       return;
// //     }

// //     const cardElement = elements.getElement(CardElement);

// //     if (!cardElement) {
// //       console.error('Card element not found.');
// //       return;
// //     }

// //     const { token, error } = await stripe.createToken(cardElement);

// //     if (error) {
// //       console.error(error.message);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/payment/payments', {
// //         amount: 1000, // Example amount (in cents)
// //         currency: 'usd',
// //         token: token.id,
// //       });

// //       setMessage('Payment successful. Redirecting...');
// //       setTimeout(() => {
// //          window.location = ('/success');
// //       }, 3000);
// //     } catch (err) {
// //       setMessage('Payment failed. Redirecting...');
// //       setTimeout(() => {
// //          window.location = ('/notfound');
// //       }, 3000);
// //     }
// //   };

// //   return (
// //     <div className='payment'>
// //     <div className="form-container">
// //       <form onSubmit={handleSubmit}>
// //         <CardElement />
// //         <button type="submit" className="button">Pay</button>
// //       </form>
// //       {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}
// //     </div>
// //     </div>
// //   );
// // };

// // export default CheckoutForm;

// // import React, { useState } from 'react';
// // import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// // const PaymentForm = ({ clientSecret }) => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!stripe || !elements || !clientSecret) {
// //       return;
// //     }
  
// //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //       payment_method: {
// //         card: elements.getElement(CardElement),
// //         billing_details: {
// //           name: 'John Doe',
// //         },
// //       },
// //     });
   
// //     if (error) {
// //       setError(error.message);
// //       setTimeout(() => {
// //         window.location='/notfound'; // Redirect to notfound page after 3 seconds
// //       }, 1000);
// //     } else {
// //       // Payment successful
// //       setTimeout(() => {
// //         window.location=('/success'); // Redirect to success page after 3 seconds
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={{marginTop:"100px"}}>
// //       <CardElement />
// //       <button type="submit" disabled={!stripe}>
// //         Pay
// //       </button>
// //       {error && <div>{error}</div>}
// //     </form>
// //   );
// // };

// // export default PaymentForm;



// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error.message);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/payment/pay', {
//         shopOwnerName: 'your_shop_owner_name_here',
//         shopName: 'your_shop_name_here',
//         ownerAddress: 'your_owner_address_here',
//         shopAddress: 'your_shop_address_here',
//         price: 1000 // Example price in cents
//       });

//       const { clientSecret } = response.data;

//       const { error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: paymentMethod.id
//       });

//       if (error) {
//         console.error(error.message);
//       } else {
//         console.log('Payment successful');
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{marginTop:"100px",color:"black"}}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// }

// export default CheckoutForm;


// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import './payment.css'; // Import the CSS file

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error.message);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/payment/pay', {
//         shopOwnerName: 'your_shop_owner_name_here',
//         shopName: 'your_shop_name_here',
//         ownerAddress: 'your_owner_address_here',
//         shopAddress: 'your_shop_address_here',
//         price: 1000 // Example price in cents
//       });

//       const { clientSecret } = response.data;

//       const { error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: paymentMethod.id
//       });

//       if (error) {
//         console.error(error.message);
//       } else {
//         console.log('Payment successful');
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{marginTop:"150px"}}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// }

// export default CheckoutForm;


import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './payment.css'; // Import the CSS file

function CheckoutForm() {
  const userdetail = JSON.parse(localStorage.getItem('userinfo'));
  const [shop, setShop] = useState(null);
    const [error, setError] = useState('');
  useEffect(() => {

    const fetchShop = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/getshop/${userdetail}`);
            setShop(response.data);
            setError(null);
        } catch (error) {
            setShop(null);
            setError(error.response.data.message);
        }
    };

    if (userdetail) {
        fetchShop();
    }
}, [userdetail]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/payment/pay', {
        shopOwnerName: `${shop.ownername}`,
        shopName: `${shop.shopname}`,
        ownerAddress: `${shop.owneraddress}`,
        shopAddress: `${shop.shopaddress}`,
        price: 40000 // Example price in cents
      });

      const { clientSecret } = response.data;

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });

      if (error) {
        console.error(error.message);
      } else {
        console.log('Payment successful');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-element">
          <label htmlFor="shopOwnerName">Shop Owner Name</label>
          <input type="text" id="shopOwnerName" name="shopOwnerName" />

          <label htmlFor="shopName">Shop Name</label>
          <input type="text" id="shopName" name="shopName" />

          <label htmlFor="ownerAddress">Owner Address</label>
          <input type="text" id="ownerAddress" name="ownerAddress" />

          <label htmlFor="shopAddress">Shop Address</label>
          <input type="text" id="shopAddress" name="shopAddress" />

          <label htmlFor="cardNumber">Card details</label>
          <CardElement
            id="cardNumber"
            options={{
              style: {
                base: {
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                }
              }
            }}
          />
        </div>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
