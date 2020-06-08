import React, { Component } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import logo from "../Assets/Icons/logo.svg";
import toggle from "../Assets/Icons/toggleIcon.svg";
import Phone from "../Assets/Icons/phone";
import closeIcon from '../Assets/Icons/CloseIcon.svg'

class Header extends Component {
  state={close:false}
  render() {
    // console.log(this.state)
    return (
      <div className="w-100 fixed-top ">
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            boxShadow: this.props.scrollTop
              ? "inset 0px -1px 0px #E8E9F5"
              : "none",
          }}
        >
          <div className="container">
          <Navbar.Brand className="res-phone-icon"
              style={{ border: "none !important" }}
            >
             <Phone color="#191C1F" width="20" height="20"/>
            </Navbar.Brand>
            <Navbar.Brand href="/">
              <div>
                <img src={logo} alt="icon" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ border: "none !important" }}
              onClick={() => this.setState({close:!this.state.close})}
            >
              <img src={this.state.close ? closeIcon : toggle} alt="icon" width={20} height={20}/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"flex-end"}}>
              <div className="height-100vh">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="#">
                  {" "}
                  <span className="phone-no" style={{ marginRight: 9 }}>
                    +971-52-411-2497
                  </span>
                 <Phone color="#FD3E60"/>
                </Nav.Link>
                <Nav.Link href="/">
                  <span className="navLink">؟أﺪﺑا نﻮﻠﺷ</span>
                </Nav.Link>
                <Nav.Link href="/about">
                  <span className="navLink">؟أﺪﺑا نﻮﻠﺷ</span>
                </Nav.Link>
                <Nav.Link href="/home">
                  <a>
                    <Button className="nav-btn">ﻢﻠﻌﺘﻟا أﺪﺑا</Button>
                  </a>
                </Nav.Link>
                
              </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
<style jsx>{``}</style>;

export default Header;
