import React from 'react';
import {config} from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Header extends React.Component {
  render() {
      return(
        <div className="main-header">
          <div className="col-md-8">

            <h1>{config.blogTitle}</h1>
          </div>
          <div className="col-md-4">
            <Link to={prefixLink('/contactus')}><h4>Contact Us</h4></Link>
          </div>
        </div>
      )
  }
}

export default Header
