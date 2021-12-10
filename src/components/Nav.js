import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import SignupModal from './auth/SignupModal'
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render () {
    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <React.Fragment>
        <NavItem>
          <NavLink>
            <Link to="/new"> New Entry</Link>
           </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </React.Fragment>
    )

    const guestLinks = (
      <React.Fragment>
        <NavItem>
          <LoginModal />
        </NavItem>

        <NavItem>
          <SignupModal />
        </NavItem>
      </React.Fragment>
    )

    return (
      <div >
        <Navbar color="#FF652F"  expand="sm" className="mb-5">
          <Container style={{backgroundColor:"#272727",color:"#FF652F"}}>
            <NavbarBrand href="/" style={{color:"#FF652F"}}>Dairy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
               
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)
