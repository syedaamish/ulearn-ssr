import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import React, { Component } from "react";
import window from "global";

export default class MyLayout extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { scrollTop: 0 };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = (e) => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );
    console.log(this.myRef);
    this.setState({
      scrollTop: scrollY,
    });
  };

  render() {
   
    return (
      <div style={{ marginTop: 60 }}>
        <Head>
          <title>Home</title>
        </Head>

        <Header scrollTop={this.state.scrollTop} />
        <div ref={this.myRef} onScroll={this.onScroll}>
          <div className="container">{this.props.children}</div>
          <div>{this.props.noContainer}</div>
        </div>

        <Footer />
      </div>
    );
  }
}
