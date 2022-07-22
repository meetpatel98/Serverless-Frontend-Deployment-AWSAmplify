import "./BookTour.css";
import { useNavigate } from "react-router-dom";
import rentimage from "../../assets/images/Tour.png";
import foodimage from "../../assets/images/Food.png"
import React, { useState } from "react";
import {
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdbreact";

const BookTour = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/bookings");
  };

  return (
    <div className="form-container row">
    <div className="col-md-6">
        <img src={rentimage} width="90%" />
      </div>
      <div className="col-md-6">
        <div className="book-tour">
          <h1>Book Tour</h1>
        </div>
        <div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
              <th>#</th>
                <th>Tour Name</th>
                <th>Price</th>
                <th>Select Your Preference</th> 
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>100</td>
                <td className="radio-btn-cell">
                  <input type="radio" value="1" name="meal" className="radio-btn" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
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
              Book
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};
export default BookTour;
