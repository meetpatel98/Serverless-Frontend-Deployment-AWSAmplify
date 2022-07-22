import "./OrderMeal.css";
import { useNavigate } from "react-router-dom";
import rentimage from "../../assets/images/OrderMeal.png";
import foodimage from "../../assets/images/Food.png"
import React, { useState } from "react";
import {
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdbreact";

const OrderMeal = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/bookings");
  };

  return (
    <div className="form-container row">
      <div className="col-md-7">
        <div className="order-meal">
          <h1>Order Meal</h1>
        </div>
        <div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
              <th>#</th>
                <th>Meal Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Select Your Preference</th> 
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td><img src={foodimage} width="30%" /></td>
                <td>100</td>
                <td className="radio-btn-cell">
                  <input type="radio" value="1" name="meal" className="radio-btn" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td><img src={foodimage} width="30%" /></td>
                <td>200</td>
                <td className="radio-btn-cell">
                  <input type="radio" value="2" name="meal" className="radio-btn"/>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div className="submit-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={onClick}
            >
              Order
            </button>
          </center>
        </div>
      </div>
      <div className="col-md-5">
        <img src={rentimage} width="90%" />
      </div>
    </div>
  );
};
export default OrderMeal;
