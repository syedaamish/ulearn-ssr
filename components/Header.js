import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import logo from "../Assets/Icons/logo.svg";
import toggle from "../Assets/Icons/toggleIcon.svg";
import phone from '../Assets/Icons/phone.svg'

class Header extends Component {
  render() {
    return (
      <div className="w-100 fixed-top ">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <div className="container">
            <Navbar.Brand href="/">
              <div>
                <img src={logo} alt="icon" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ border: "none !important" }}
            >
              <img src={toggle} alt="icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link href="#">
                  {" "}
                  <span className="phone-no" style={{marginRight:9}}>+971-52-411-2497</span>

                  <img src={phone} alt="icon"/>
                </Nav.Link>
                <Nav.Link id="navLink" href="/" ><span className="navLink">؟أﺪﺑا نﻮﻠﺷ</span></Nav.Link>
                <Nav.Link href="/about"><span className="navLink">؟أﺪﺑا نﻮﻠﺷ</span></Nav.Link>
                <Nav.Link><Button className="nav-btn">ﻢﻠﻌﺘﻟا أﺪﺑا</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
<style jsx>{`
  
`}</style>;

export default Header;
