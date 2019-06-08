import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class AppNavbar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
        <div>
            <Navbar color = "dark"
            dark expand="sm"
            className="mb-5"
            
            >
<Container>
    <NavbarBrand href="/">
        Shopping List
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#"></NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </NavbarBrand>
</Container>
            </Navbar>
        </div>
        )}
}
export default AppNavbar;