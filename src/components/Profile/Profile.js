import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';

class Profile extends React.Component {
  static propTypes = {
    profile: PropTypes.object,
    commits: PropTypes.number,
  }

  render() {
    const { profile, commits } = this.props;
    return (
      <div className="profile col">
        <div className="avatar">
          <img className="pic" id="me" src={profile.avatar_url} alt="avatar" />
          <div>
            <h3 className="name">{profile.name}></h3>
            <p className="login">{profile.login}></p>
            <p className="bio">{profile.bio}></p>
            <a href={profile.html_url} className="_blank profile-link-text">{profile.html_url}></a>
            <div className="text-center mt-2">
              <h3>{commits}</h3>
              <p className="commits-text">commits in the last 5 days</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;