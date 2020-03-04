import React from "react";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";

class Home extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

  render() {
    return (
      <div className="container">
        <Head title="Just Landed - Get Luusy" />
        <Nav />
        <main>
          Just landed
        </main>
      </div>
    );
  }
}

export default connect(null, null)(Home);
