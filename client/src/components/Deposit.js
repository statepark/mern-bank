import React, {useContext} from "react";
import Card from "react-bootstrap/Card";

import Balance from './Balance';
import { useState } from "react";
import { UserContext } from "../context/GlobalState";

const Deposit = ({ user }) => {
  const [amount, setAmount] = useState("");

  function handle(){
    console.log(amount);
    //todo add deposit to balance
    

    user.balance = user.balance + Number(amount);
       
  }

  return (
    <Card>
      <Card.Body> 
        <h3>Make a deposit here</h3>
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
              Deposit
            </button>
          </div>
        </form>
        <Balance />
      </Card.Body>
    </Card>
  );
};
export default Deposit;
