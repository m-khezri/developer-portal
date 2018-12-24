import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <div className="picHolder w-25 h-25 bg-secondary">
          <img className="profilePic" alt="user picture"></img>
        </div>
        <h2>Profile</h2>
      </div>
    );
  }
}

export default Profile;