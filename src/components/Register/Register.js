import React from "react";

const Register = () => {
  return (
    <div class="container bg-primary ">
      <div class="row p-5">
        <div class="col text-white">
          <h1>Register Now</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quam
            numquam explicabo iure blanditiis consequatur!
          </p>
          <div className="d-flex gap-3 mt-5 text-black">
            <div className="d-flex align-items-center justify-content-center rounded-2 py-3 bg-light w-25 h-25">
              <h1>150</h1>
              <span>Days</span>
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-2 py-3 bg-light w-25 h-25">
              <h1>23</h1>
              <span>Hours</span>
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-2 py-3 bg-light w-25 h-25">
              <h1>47</h1>
              <span>Mins</span>
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-2 py-3 bg-light w-25 h-25">
              <h1>59</h1>
              <span>Secs</span>
            </div>
          </div>
        </div>
        <div class="col">
          <form action="">
            <div class="mb-3 w-50 mx-auto bg-white p-4">
              <div className="text-center mb-3">
                <p className="mb-0 fw-bold">Courses For Free</p>
                <small className="text-muted ">
                  It is high time for learning
                </small>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control border-0 border-bottom mb-3"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="your Full Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control border-0 border-bottom mb-3"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control border-0 border-bottom mb-3"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="your Full Address"
                />
              </div>
              <button className="btn btn-warning text-white w-100 rounded-0">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
