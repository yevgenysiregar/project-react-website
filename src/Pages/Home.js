import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Carousel } from "../carousel";
import logo from "../assets/logo.svg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink href="/">
            <img src={logo} alt="Logo" width="50px" height="50px" />
          </NavLink>
          <NavbarBrand href="/">Project React Website</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/yevgenysiregar">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/login">Log in</DropdownItem>
                  <DropdownItem href="/signup">Sign up</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Log out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Carousel />
        <footer style={{ textAlign: "center" }}>
          Copyright 2019 Yevgeny Omar Siregar
        </footer>
      </div>
    );
  }
}
