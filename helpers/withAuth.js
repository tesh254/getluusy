import React from "react";
import router from "next/router";
import { auth } from "../firebase";
import Navbar from "../components/nav";
import Loader from "../components/loader"

const withAuth = Component => {
  return class extends React.Component {
    state = {
      status: "LOADING"
    };

    static async getInitialProps(props) {
      const { store, isServer } = props;
      return { isServer };
    }

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            status: "SIGNED_IN"
          });
        } else {
          router.push("/login");
        }
      });
    }

    renderContent = () => {
      const { status } = this.state;

      if (status === "LOADING") {
        return (
          <div className="container">
            <Navbar />
            <main>
              <Loader />
            </main>
          </div>
        );
      } else if (status === "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    };

    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};

export default withAuth;
