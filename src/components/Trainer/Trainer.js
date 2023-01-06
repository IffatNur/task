import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from '../../assets/person1.png'
import img2 from '../../assets/person2.png'
import img3 from '../../assets/person3.png'
import img4 from '../../assets/person4.png'

const Trainer = () => {
    return (
      <div className="text-center my-5 w-75 mx-auto">
        <div className="my-4">
          <h1>Our Expert Trainers</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <Card style={{ width: "14rem",border:'none' }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    <small className="text-muted">Sr. Web Developer</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card style={{ width: "14rem",border:'none' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    <small className="text-muted">Sr. Web Developer</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card style={{ width: "14rem",border:'none' }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    <small className="text-muted">Sr. Web Developer</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card style={{ width: "14rem",border:'none' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    {" "}
                    <small className="text-muted">Sr. Web Developer</small>
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