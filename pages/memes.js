import React from "react";
import { connect } from "react-redux";
import Head from "../components/head";
import Nav from "../components/nav";

class Memes extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    return { isServer };
  }

  render() {
    <div className="container">
      <Head title="Memes - Get Luusy" description="The best memes on the internet" />
      <Nav />
    </div>;
  }
}
