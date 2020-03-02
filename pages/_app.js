import App, { Container } from "next/app";
import React from "react";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";
import { Provider } from "react-redux";
import "../static/sass/app.scss";

export default withRedux(store)(
  class GetLussyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(await Component.getInitialProps(ctx))
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
