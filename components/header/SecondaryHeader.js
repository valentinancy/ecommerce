import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router'

class SecondaryHeader extends React.Component {
  render() {
    return(
      <div className="secondary-header">
        <div className="col-md-2 col-md-offset-1">
          <a className="logo-light" href=""><img alt="" src="../images/logo-light.png" className="logo" /></a>
        </div>
        <div className="navbar-collapse navbar-collapse-secondary">
            <ul className="nav navbar-nav">
                <li className="secondary-menu">
                  <Link to={prefixLink('/')}>
                    shop
                  </Link>
                </li>
                <li className="secondary-menu snipcart-checkout"><a href="">my cart<i className="fa fa-shopping-cart"></i></a></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default SecondaryHeader
