import React from 'react';
import Card from "react-bootstrap/Card";
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Featurs = () => {
    return (
      <div className="text-center my-5 w-75 mx-auto">
        <h1 className="my-4">Awesome Features</h1>
        <div class="container">
          <div class="row">
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#f9f9ff",
                  border: 0,
                  textAlign: "left",
                  height: "220px",
                }}
              >
                <Card.Body>
                  <img src={icon1} alt="" />
                  <Card.Title>Scholarship Facility</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#f9f9ff",
                  border: 0,
                  textAlign: "left",
                  height: "220px",
                }}
              >
                <Card.Body>
                  <img src={icon2} alt="" />
                  <Card.Title>Sell Online Courses</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#f9f9ff",
                  border: 0,
                  textAlign: "left",
                  height: "220px",
                }}
              >
                <Card.Body>
                  <img src={icon3} alt="" />
                  <Card.Title>Global Certification</Card.Title>
                  <Card.Text className="mb-2 text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Featurs;