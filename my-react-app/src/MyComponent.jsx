import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-5">
      <h1>My Component</h1>

      <div className="mb-4">
        {" "}
        {/* 增加不同对之间的间距 */}
        <input
          className="border-2 border-solid border-black mb-1" // 减小相同对内部的间距
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <p>Name: {name}</p>
      </div>

      <div className="mb-4">
        <input
          className="border-2 border-solid border-black "
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <p>Quantity: {quantity}</p>
      </div>
      <div className="mb-4">
        <textarea
          className="border-2 border-solid border-black "
          value={comment}
          onChange={handleCommentChange}
        />
        <p>Comment: {comment}</p>
      </div>

      <div className="mb-4">
        <select
          className="border-2 border-solid border-black"
          value={payment}
          onChange={handlePaymentChange}
        >
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <p>Payment Method: {payment}</p>
      </div>

      <div className="mb-4">
        <label>
          <input
            type="radio"
            value="standard"
            checked={shipping === "standard"}
            onChange={handleShippingChange}
          />
          Standard Shipping
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="express"
            checked={shipping === "express"}
            onChange={handleShippingChange}
          />
          Express Shipping
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </div>
  );
};

export default MyComponent;
