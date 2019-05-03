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
import logo from "../assets/logo.svg";
import { SignUpForm } from "../signupForm";

const Form = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavLink href="/">
        <img src={logo} alt="Logo" width="50px" height="50px" />
      </NavLink>
      <NavbarBrand href="/">Project React Website</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/About">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/yevgenysiregar">GitHub</NavLink>
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
    <SignUpForm />
  </div>
);

export default Form;
