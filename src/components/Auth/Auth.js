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
      <div className="auth-container d-flex justify-content-center bg-dark">
        <div className="Auth m-5 p-5 text-center border border-secondary w-50 rounded bg-dark shadow-sm">
          <h1 className="display-2 text-info">Developer Portal</h1>
          <p className="text-light">Please login with your GitHub account</p>
          <button className="btn btn-success btn-lg w-25" onClick={this.authenticateUser}>Login</button>
        </div>
      </div>
    );
  }
}

export default Auth;