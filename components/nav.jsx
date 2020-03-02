import React from "react";

class Navbar extends React.Component {
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
            <a href="/geek" className="nav-link">
              <img src="/static/images/geek.svg" alt="geek" />
              <span className="link-text">Geek</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/tags" className="nav-link">
              <img src="/static/images/tags.svg" alt="glasses" />
              <span className="link-text">Nerd</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
