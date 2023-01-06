import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from '../../assets/person1.png'
import img2 from '../../assets/person2.png'
import img3 from '../../assets/person3.png'
import img4 from '../../assets/person4.png'

const Trainer = () => {
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
                <Card.Img variant="top" src={img2} />
                <Card.Body>
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
                <Card.Img variant="top" src={img4} />
                <Card.Body>
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

export default Trainer;