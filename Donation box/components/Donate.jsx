import React, { Fragment, useState } from "react";
import "./donate.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [showToOthers, setShowToOthers] = useState(true);
  const [amount, setAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleShowToOthersChange = () => {
    setShowToOthers(!showToOthers);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/register", {
        name,
        email,
        phone: contactNumber,
        amount,
        isVisible: showToOthers,
      })
      .then(() => {
        alert("Thank you for donating");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Fragment>
      <form className="donate-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Donation Box</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            className="form-input"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="showToOthers">Show to Others</label>
          <input
            type="checkbox"
            id="showToOthers"
            className="checkbox-input"
            checked={showToOthers}
            onChange={handleShowToOthersChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-input"
            placeholder="Enter the donation amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Donate
        </button>
      </form>
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </Fragment>
  );
}
