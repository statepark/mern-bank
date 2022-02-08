import React from "react";
import Card from 'react-bootstrap/Card';

import Balance from './Balance';
import { useState } from "react";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  
  const handle = () =>{
    console.log('I am handled')
  }
  
  return (
    <div>
      <Card>
        <Card.Body>
        
        <h3>Withdraw some money</h3>
        <form>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
            <button type="submit" className="btn btn-light" onClick={handle}>
              Withdraw
            </button>
          </div>
        </form>
        <Balance />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Withdraw;
