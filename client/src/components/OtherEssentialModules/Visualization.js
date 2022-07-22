import "./Visualization.css";
import { useNavigate } from "react-router-dom";
import rentimage from "../../assets/images/graphs.jpg";
import React from "react";
import axios from "axios";

const Visualization = () => {
  const bookingGraph = () => {
    axios.get(
      "https://us-central1-b00896765a4partb.cloudfunctions.net/booking_details"
    );

    window.open(
      "https://datastudio.google.com/embed/reporting/111d0138-0319-4d47-8661-d198f0faac1d/page/tEnnC"
    );
  };

  const reportGeneration = () => {
    window.open(
      "https://datastudio.google.com/embed/reporting/111d0138-0319-4d47-8661-d198f0faac1d/page/tEnnC"
    );
  };

  const foodOrderGraph = () => {
    axios.get(
      "https://us-east1-b00896765a4partb.cloudfunctions.net/meal_order"
    );

    window.open(
      "https://datastudio.google.com/embed/reporting/4521f516-abff-466f-b02e-260df9276040/page/tEnnC"
    );
  };

  const userLogs = () => {
    axios.get("https://us-east1-b00896765a4partb.cloudfunctions.net/user_logs");

    window.open(
      "https://datastudio.google.com/embed/reporting/a6bf6b88-af4f-4761-be99-130f0baec96a/page/tEnnC"
    );
  };

  const tourBookingGraph = () => {
    axios.get("https://us-east1-b00896765a4partb.cloudfunctions.net/tour_booking");

    window.open(
      "https://datastudio.google.com/embed/reporting/7f43ebee-1e29-4688-8b1e-06600fc2c2dc/page/tEnnC"
    );
  };

  return (
    <div className="form-container row">
      <div className="col-md-6">
        <img src={rentimage} width="90%" />
      </div>
      <div className="col-md-6">
        <div className="visualization">
          <h3>Visualization</h3>
        </div>
        <div className="next-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={userLogs}
            >
              User Logs 
            </button>
          </center>
        </div>
        <div className="next-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={bookingGraph}
            >
              Customer Room Booking Graph
            </button>
          </center>
        </div>
        <div className="next-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={foodOrderGraph}
            >
              Customer Food Orders Graph
            </button>
          </center>
        </div>
        <div className="next-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={tourBookingGraph}
            >
              Customer Tour Booking Graph
            </button>
          </center>
        </div>
        <div className="report">
          <h3>Report</h3>
        </div>
        <div className="next-btn">
          <center>
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={reportGeneration}
            >
              Generate Report
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Visualization;
