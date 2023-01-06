import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const Courses = () => {
    return (
      <div className="text-center my-5">
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
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-3"
                  >
                    Go somewhere
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img2}  />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-3"
                  >
                    Go somewhere
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Button
                    variant="primary"
                    className="d-flex justify-content-left my-3"
                  >
                    Go somewhere
                  </Button>
                  <Card.Title>Social Media Network</Card.Title>
                  <Card.Text>
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

export default Courses;