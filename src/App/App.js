import React, { Component } from 'react';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import './App.scss';
import MyNavbar from '../components/MyNavbar/myNavbar';
import Profile from '../components/Profile/Profile';
import Tutorials from '../components/Tutorials/Tutorials';
import CommitsData from '../components/CommitsData/CommitsData';
import TutorialsCrud from '../components/TutorialsCrud/TutorialsCrud';
import authRequest from '../helpers/data/authRequest';
import firebase from 'firebase/app';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
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
        <Tutorials />
        <Profile />
        <CommitsData />
        <TutorialsCrud />
      </div>
    );
  }
}

export default App;
