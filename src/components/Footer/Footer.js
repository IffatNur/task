import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="d-flex justify-content-evenly">
        <div class="container w-50 d-flex justify-content-center m-5">
          <div class="row">
            <div class="col">
              <h5>Top Products</h5>
              <small>Manage Website</small>
              <small>Manage Reputation</small>
              <small>Power Tools</small>
              <small>Marketing Services</small>
            </div>
            <div class="col">
              <h5>Quick Links</h5>
              <small>Jobs</small>
              <small>Brand Assets</small>
              <small>Investor Relation</small>
              <small>Terms of Services</small>
            </div>
            <div class="col">
              <h5>Features</h5>
              <small>Jobs</small>
              <small>Brand Assets</small>
              <small>Investor Relation</small>
              <small>Terms of Services</small>
            </div>
            <div class="col">
              <h5>Resources</h5>
              <small>Manage Website</small>
              <small>Manage Reputation</small>
              <small>Power Tools</small>
              <small>Marketing Services</small>
            </div>
          </div>
        </div>
        <div className="w-50 my-5">
          <div className="ps-5">
            <h4>Newsletter</h4>
            <small>You can trust us. We only send promo offers.</small>
          </div>
          <div class="d-flex justify-content-center">
            <input
              type="text"
              className="form-control py-2 w-75"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              type="button"
              className="btn btn-warning px-5 py-1 my-1 rounded-0 "
              style={{ position: "absolute", right: "3px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pb-5">
        <small>copyright reserved</small>
      </div>
    </div>
  );
};

export default Footer;
