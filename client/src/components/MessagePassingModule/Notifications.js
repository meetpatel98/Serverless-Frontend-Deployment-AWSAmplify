import "./Notifications.css";
import { useNavigate } from "react-router-dom";
import rentimage from "../../assets/images/Tour.png";
import React, { useState } from "react";
import {
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdbreact";

const Notifications = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/bookings");
  };

  return (
    <div className="form-container row">
      <div className="col-md-12">
        <div className="notifications">
          <h1>Notifications</h1>
        </div>
        <div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
              <th>#</th>
                <th>Timestamps</th>
                <th>Messages</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>100</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>200</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div className="submit-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={back}
            >
              Back
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
