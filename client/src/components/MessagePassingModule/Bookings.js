import "./Bookings.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBContainer,
  Radio,
} from "mdbreact";

const Bookings = () => {
  const navigate = useNavigate();

  const orderMeal = () => {
    navigate("/ordermeal");
  };

  const bookTour = () => {
    navigate("/booktour");
  };

  const provideFeedback = () => {
    navigate("/feedback");
  };

  const notifications = () => {
    navigate("/notifications");
  };

  return (
    <div className="form-container row">
      <div className="col-md-12">
        <div className="bookings">
          <h1>Bookings</h1>
          <button
          type="submit"
          className="btn-notifications btn-secondary"
          onClick={notifications}
        >
          Notifications
        </button>
        </div>
        <div>
          <div className="hotel-bookings">
            <h1>Booked Rooms</h1>
          </div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Emenities</th>
                <th>Bed Type</th>
                <th>Number of Beds</th>
                <th>Cost per night</th>
                <th>Select Your Preference</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>100</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={orderMeal}
                  >
                    Order Meal
                  </button>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={bookTour}
                  >
                    Book Tour
                  </button>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>200</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={orderMeal}
                  >
                    Order Meal
                  </button>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={bookTour}
                  >
                    Book Tour
                  </button>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div>
          <div className="ordered-meals">
            <h1>Ordered Meals</h1>
          </div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Meal Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Feedback</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>100</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>200</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div>
          <div className="booked-tours">
            <h1>Booked Tours</h1>
          </div>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Tour Name</th>
                <th>Price</th>
                <th>Feedback</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <button
                    type="submit"
                    className="btn-table btn-secondary"
                    onClick={provideFeedback}
                  >
                    Provide Feedback
                  </button>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};
export default Bookings;
