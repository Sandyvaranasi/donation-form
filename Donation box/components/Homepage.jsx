import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(e) {
    e.preventDefault();
    navigate("/donate");
  }

  return (
    <Fragment>
      <div className="heading-container">
        <h1 className="heading">Donate For Good</h1>
        <div className="description">
          <p>Support our relief efforts for those affected by the devastating floods.
             Your donation will provide essential supplies and assistance to those in need.
             Every contribution counts! Join us in supporting the flood victims and helping them recover from this natural disaster.
             Your donation will ensure that affected families receive immediate relief, including food, water, shelter, and medical aid.
             Together, we can help rebuild lives and communities affected by the floods.
             Your support will make a lasting impact on the recovery process.
             Visit our website or contact us to make a donation and offer hope to those affected by the floods.
             Your generosity can bring relief and restore hope in their time of need.</p>
        </div>
      </div>
      <div>
        {data.map((element) => (
          <div key={element.id} className="card">
            <label className="label">Name:</label>
            <h2>{element.name}</h2>
            <label className="label">E-Mail:</label>
            <h3>{element.email}</h3>
            <label className="label">Amount Donated:</label>
            <h3>{element.amount}</h3>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleClick}>
        Donation Box
      </button>
    </Fragment>
  );
}

