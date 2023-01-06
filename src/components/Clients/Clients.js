import React from 'react';
import img1 from "../../assets/person3.png";
import img2 from "../../assets/person4.png";

const Clients = () => {
    return (
      <div className="text-center my-5">
        <div className="my-4">
          <h1>Our Expert Trainers</h1>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={img1} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card mb-3 d-flex align-Items-center"
                style={{ maxWidth: "540px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4 ">
                    <img src={img2} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Clients;