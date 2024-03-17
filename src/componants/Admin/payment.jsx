
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentTable() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payment/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  const handleDelete = async (owneremail) => {
    try {
      await axios.delete(`http://localhost:5000/api/payment/payments/${owneremail}`);
      setPayments(payments.filter((payment) => payment.owneremail !== owneremail));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  const handleUpdate = async (owneremail, isPaid) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/payment/payments/${owneremail}`, { isPaid });
      setPayments(payments.map((payment) => payment.owneremail === owneremail ? { ...payment, isPaid: true } : payment));
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

  return (
    <table style={{ marginTop: "100px", color: "black" }}>
      <thead>
        <tr>
          <th>Shop Owner Name</th>
          <th>Shop Name</th>
          <th>Owner Address</th>
          <th>Shop Address</th>
          <th>Owner Email</th>
          <th>Price</th>
          <th>Is Paid</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.owneremail}>
            <td>{payment.shopOwnerName}</td>
            <td>{payment.shopName}</td>
            <td>{payment.ownerAddress}</td>
            <td>{payment.shopAddress}</td>
            <td>{payment.owneremail}</td>
            <td>{payment.price}</td>
            <td>{payment.isPaid ? 'Yes' : 'No'}</td>
            <td>{new Date(payment.time).toLocaleString()}</td>
            <td>
              <button onClick={() => handleDelete(payment.owneremail)}>Delete</button>
              <button onClick={() => handleUpdate(payment.owneremail, !payment.isPaid)}>Toggle Paid</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentTable;

