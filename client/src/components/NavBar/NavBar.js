import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../app/App.css'

class NavGuy extends Component {

  logout = () => {
    // Destroy token 
    window.localStorage.removeItem('api_token');
    window.location = '/';
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <nav className="pt-0 navbar navbar-expand-lg fixed-top color-scheme">
          <a className="navbar-brand atag-color nav-font-size" diabled='true'>Jo's Special Needs Cat Fostering Referrals</a>
          <button className="navbar-toggler p-0 btn-background-color" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {isLoggedIn ?
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link atag-color nav-font-size" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link atag-color nav-font-size" to="/contact">Clients</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link atag-color nav-font-size" to="/provider">Providers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link atag-color nav-font-size" onClick={this.logout}>Logout</Link>
                </li>
              </ul>
              :
              <ul className="navbar-nav ml-auto">
              <li>
                <Link to='/signup' className="nav-link atag-color nav-font-size">
                  Sign up
                </Link>
              </li>
              <li>
                <Link to='/login' className="nav-link atag-color nav-font-size">
                  Login
                </Link>
              </li> 
              <li className="nav-item active">
                <Link className="nav-link atag-color nav-font-size" to="/home">Home</Link>
              </li>
              </ul>
            }
          </div>
        </nav>
      </>
    )
  }
}
export default NavGuy