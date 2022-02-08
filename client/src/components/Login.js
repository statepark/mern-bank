import React from "react";
import Card from 'react-bootstrap/Card';


const Login = () => {
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  const handle = () => {
    console.log('you need to authenticate the user');
  }

  return (
    <Card>
      <Card.Body>
      <h3>Let's log you in to your account</h3>
      <form>
          <div className="form-control">
             <label htmlFor="name">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
            />
             <label htmlFor="name">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your secret password..."
            />
            <button type="submit" className="btn btn-light" onClick={handle}>
              Check my credentials and log me in!
            </button>
          </div>
        </form>

      </Card.Body>
    </Card>
  );
}

export default Login






