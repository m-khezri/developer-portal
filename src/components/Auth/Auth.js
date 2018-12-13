import React from 'react';
import authRequests from '../../helpers/data/authRequest';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.probs.isAuthenticated();
    }).catch(err => console.error('there was an error', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-success" onClick={this.authenticateUser}>Login with your GitHub account</button>
      </div>
    );
  }
}

export default Auth;