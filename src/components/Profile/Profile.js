import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div className="bg-white rounded shadow-sm p-3 w-25">
        <img className="w-75 rounded-circle mx-auto d-block" src={this.props.profile.avatar_url} alt="user profile" />
        <h4 className="text-center">{this.props.profile.name}</h4>
        <p className="text-center">{this.props.profile.bio}</p>
      </div>
    );
  }
};

export default Profile;

