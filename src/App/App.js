import React, { Component } from 'react';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';
import getUser from '../helpers/data/GithubRequests';
import getCommits from '../helpers/data/GithubRequests';
import MyNavbar from '../components/MyNavbar/myNavbar';
import Profile from '../components/Profile/Profile';
import Input from '../components/Input/Input';
import authRequest from '../helpers/data/authRequest';
import firebase from 'firebase/app';

class App extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    getUser.getUser('m-khezri')
      .then((result) => {
        console.log(result);
        this.setState({ profile: result });
      })
      .catch(err => console.log(err));

    getCommits.getCommits('m-khezri')
      .then((result) => {
        console.log(result);
        this.setState({ commits: result });
      })
      .catch(err => console.log(err));

    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const logoutClickEvent = () => {
      authRequest.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAthenticated={this.isAuthenticated} />
        </div >
      );
    }

    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="container rounded">
          <div className="row">
            <Profile
              profile={this.state.profile}
              commits={this.state.commits}
            />
            <div className="col-sm-9">
              <Input />
            </div>
          </div>
          <div className="row my-3">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
