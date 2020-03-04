import React from "react";
import moment from "moment";
import withAuth from "../helpers/withAuth";
import Head from "../components/head";
import Nav from "../components/nav";
import Loader from "../components/loader";
// import Back from "../components/back";
import { auth } from "../firebase";

class Profile extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

  state = {
    isLoading: true,
    user: {}
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          user,
          isLoading: false
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
    const { user, isLoading } = this.state;
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
                  <div className="profile__join-date">
                    <div className="profile__date-related">
                      {/* <img src="/static/images/calendar.svg" alt="calendar" /> */}
                      <span className="profile__date">
                      🤗 Joined {moment(user.metadata.creationTime).format("LL")}
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
