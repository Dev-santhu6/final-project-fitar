
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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isFormFilled = localStorage.getItem('formFilled') === 'true';

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem('userinfo'));
  //   setIsLoggedIn(userInfo ? true : false);
  // }, []);
  const isLoggedIn= localStorage.getItem("userinfo") === "true";

  const handlepay = () => {
    if (isLoggedIn) {
      window.location=('/Checkout');

    } else {
      window.location=('/login');
    }
  };


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
        owneremail:`${shop.owneremail}`,
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
    <section className='payment'>
    <div className="payment-container">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-element">
        <label htmlFor="shopOwnerName">Shop Owner Name</label>
<input type="text" id="shopOwnerName" name="shopOwnerName" defaultValue={shop ? shop.ownername : ''} />

<label htmlFor="shopName">Shop Name</label>
<input type="text" id="shopName" name="shopName" defaultValue={shop ? shop.shopname : ''} />

<label htmlFor="ownerAddress">Owner Address</label>
<input type="text" id="ownerAddress" name="ownerAddress" defaultValue={shop ? shop.owneraddress : ''} />

<label htmlFor="shopAddress">Shop Address</label>
<input type="text" id="shopAddress" name="shopAddress" defaultValue={shop ? shop.shopaddress : ''} />

<label htmlFor="owneremail">Owner Email</label>
<input type="text" id="owneremail" name="owneremail" defaultValue={shop ? shop.owneremail : ''} />

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
        <button type="submit" disabled={!stripe} onClick={handlepay}>
          Pay
        </button>
      </form>
    </div>
    </section>
  );
}

export default CheckoutForm;
