import React from "react";
import moment from "moment";
import withAuth from "../helpers/withAuth";
import Head from "../components/head";
import Nav from "../components/nav";
import Loader from "../components/loader";
import { auth, db } from "../firebase";
import Axios from "axios";

const apiUrl = process.env.API_URL;

class Profile extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

  state = {
    isLoading: true,
    user: {},
    profile: {},
    profileLoading: true
  };

  async componentDidMount() {
    await auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          isLoading: false
        });

        return user
          .getIdToken()
          .then(token => {
            this.setState({
              profileLoading: true
            });
            Axios.defaults.headers.common["UID"] = user.uid;
            return Axios.get(`${apiUrl}/api/v1/get-own-zone`);
          })
          .then(res => {
            this.setState({
              profile: res.data.profile,
              profileLoading: false
            });
          });
      } else {
        this.setState({
          isLoading: false
        });

        alert("Oops problem fetching that particular user");
      }
    });
  }

  render() {
    const { user, isLoading, profile, profileLoading } = this.state;
    return (
      <div className="container">
        <Head title="Your Zone - GetLuusy" />
        <Nav />
        <main>
          {/* <Back link="/" /> */}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="profile__container">
              <div className="profile__info">
                <div
                  className="profile__avatar-holder"
                  style={{ background: `url('${user.photoURL}')` }}
                ></div>
                <div className="profile__details">
                  <span className="profile__username">{user.displayName}</span>
                  <br />
                  {profileLoading ? (
                    <Loader />
                  ) : (
                    <div className="more__details">
                      {profile.username ? (
                        <span className="profile__unique-name">
                          {profile.username}
                        </span>
                      ) : null}
                      <br />
                      {profile.bio ? (
                        <span className="profile__bio">{profile.bio}</span>
                      ) : null}
                      <div className="profile__socials">
                        {profile.twitter ? (
                          <a
                            href={`https://twitter.com/${profile.twitter}`}
                            target="_blank"
                            className="profile__social-item"
                          >
                            <img
                              src="/static/images/twitter.svg"
                              alt="twitter_icon"
                            />
                          </a>
                        ) : null}
                        {profile.patreon ? (
                          <a
                            href={`https://patreon.com/${profile.patreon}`}
                            target="_blank"
                            className="profile__social-item"
                          >
                            <img
                              src="/static/images/patreon.svg"
                              alt="patreon_icon"
                            />
                          </a>
                        ) : null}
                        {profile.instagram ? (
                          <a
                            href={`https://instagram.com/${profile.instagram}`}
                            target="_blank"
                            className="profile__social-item"
                          >
                            <img
                              src="/static/images/ig.png"
                              alt="instagram_icon"
                            />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  )}
                  <div className="profile__join-date">
                    <div className="profile__date-related">
                      <span className="profile__date">
                      📅 Joined{" "}
                        {moment(user.metadata.creationTime).format("LL")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="profile__action">
                  <button className="follow__button">📝 Edit Profile</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default withAuth(Profile);
