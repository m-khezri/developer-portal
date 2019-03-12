import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.profile}</h1>
      </div>
    );
  }
};

export default Profile;

