import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/css/style.scss"

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    const pageProps = Component.getStaticProps
      ? await Component.getStaticProps(ctx)
      : {};

    return { pageProps };
  }

  
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(MyApp);
