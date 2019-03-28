import React from 'react';
import './Profile.scss'

class Profile extends React.Component {
  render() {
    return (
      <div className="bg-white rounded shadow-sm p-3 w-25">
        <img className="w-75 rounded-circle mx-auto d-block" src={this.props.profile.avatar_url} alt="user profile" />
        <h4 className="text-center mt-2">{this.props.profile.name}</h4>
        <h6 className="text-center">{this.props.profile.bio}</h6>
        <h1 className="text-center display-1">{this.props.commits}</h1>
        <p className="text-center">Commits</p>
      </div>
    );
  }
};

export default Profile;

;