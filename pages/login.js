import React from "react";
import router from "next/router";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";

import { auth, firebase } from "../firebase";

class Login extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(provider)
      .then(() => {
        router.push("/");
      })
      .catch(err => {
        alert("Oops something went wrong while opening a door for you");
        console.log(err);
      });
  };

  handleTwitterSignIn = () => {
    var provider = new firebase.auth.TwitterAuthProvider();

    auth
      .signInWithPopup(provider)
      .then(() => {
        router.push("/");
      })
      .catch(err => {
        alert("Oops something went wrong while opening a door for you");
      });
  };

  handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        alert("We hope to see you again");
      })
      .catch(err => {
        alert("Oops something went wrong, kicking you out");
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <Head title="Wanna join?? - Get Luusy" />
        <Nav />
        <main>
          <section className="auth__holder">
            <div className="auth__hold-container">
              <div className="auth__input">
                <span className="login__text">Wanna Join??</span>
                <br />
                <br />
                <button className="auth__button" onClick={this.handleSignIn}>
                  <span className="auth__login-btn">
                    <img src="/static/images/google.svg" alt="google" />
                  </span>
                  <span className="auth__login-text">Sign in with Google</span>
                </button>
                <button className="auth__button" onClick={this.handleSignIn}>
                  <span className="auth__login-btn">
                    <img src="/static/images/twitter.svg" alt="twitter" />
                  </span>
                  <span className="auth__login-text">Sign in with Twitter</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default connect(null, null)(Login);
