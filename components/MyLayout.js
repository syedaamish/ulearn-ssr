import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  marginTop: 60,
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Home</title>
    </Head>

    <Header />
    <div className="container">{props.children}</div>
    <div>{props.noContainer}</div>
    <Footer />
  </div>
);

export default Layout;
