import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import avatar from '../../assets/avatar.png'
import { FaUserAlt, FaRegHeart } from "react-icons/fa";


const Courses = () => {
    return (
      <div className="text-center my-5 w-75 mx-auto">
        <div className="my-4">
          <h1>Our popular courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            porro.
          </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  height: "525px",
                  textAlign: "left",
                  border: 0,
                  backgroundColor: "#f9f9ff",
                }}
              >
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-1 btn-sm rounded-0"
                  >
                    Design
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src={avatar}
                          alt=""
                          className="rounded-circle"
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                        <small className="fw-bold">Cameron</small>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="d-flex align-items-center gap-1">
                          <FaUserAlt></FaUserAlt>
                          <span>25</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <FaRegHeart></FaRegHeart>
                          <span>30</span>
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  height: "525px",
                  textAlign: "left",
                  border: 0,
                  backgroundColor: "#f9f9ff",
                }}
              >
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-1 btn-sm rounded-0"
                  >
                    Design
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src={avatar}
                          alt=""
                          className="rounded-circle"
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                        <small className="fw-bold">Cameron</small>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="d-flex align-items-center gap-1">
                          <FaUserAlt></FaUserAlt>
                          <span>25</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <FaRegHeart></FaRegHeart>
                          <span>30</span>
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  height: "525px",
                  textAlign: "left",
                  border: 0,
                  backgroundColor: "#f9f9ff",
                }}
              >
                <Card.Img
                  variant="top"
                  src={img3}
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-1 btn-sm rounded-0"
                  >
                    Design
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src={avatar}
                          alt=""
                          className="rounded-circle"
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                        <small className="fw-bold">Cameron</small>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="d-flex align-items-center gap-1">
                          <FaUserAlt></FaUserAlt>
                          <span>25</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <FaRegHeart></FaRegHeart>
                          <span>30</span>
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Courses;