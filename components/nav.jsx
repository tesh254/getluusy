import React from "react";
import { auth } from "../firebase";

class Navbar extends React.Component {
  state = {
    auth: false,
    photoUrl: "",
    uid: ""
  };

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {
        this.setState({
          auth: true,
          photoUrl: authUser.photoURL,
          uid: authUser.uid
        });
      } else {
        this.setState({
          auth: false
        });
      }
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/" className="nav-link">
              <span className="link-text logo-text">Home</span>
              <img src="/static/images/logo.svg" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/memes" className="nav-link">
              <img src="/static/images/cat.svg" alt="cats" />
              <span className="link-text">Memes</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/explore" className="nav-link">
              <img src="/static/images/explore.svg" alt="explore" />
              <span className="link-text">Explore</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/tags" className="nav-link">
              <img src="/static/images/tags.svg" alt="geek" />
              <span className="link-text">Tags</span>
            </a>
          </li>
          {this.state.auth === true ? (
            <li className="nav-item">
              <a className="nav-link" href={`/zone/${this.state.uid}`}>
                <img
                  className="photo__url"
                  src={this.state.photoUrl}
                  alt="user"
                />
                <span className="link-text">Zone</span>
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a href="/login" className="nav-link">
                <img src="/static/images/user.svg" alt="glasses" />
                <span className="link-text">Zone</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
