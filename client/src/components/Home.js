import React from "react";
import Card from "react-bootstrap/Card";

import bank from '../images/bank.png';

const Home = () => {
  return (
    <Card>
      <Card.Body>
        <h3>Welcome to the bank</h3>
      <Card.Img variant="top" src={bank}/>
      <h4>Get a job and put some money in here</h4>
      </Card.Body>
    </Card>
  );
};

export default Home;
