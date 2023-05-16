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
      <h1 className="heading">Donate For Good</h1>
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
