import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, fontSizeToMS } from 'utils/typography'
import { config } from 'config'
import MainHeader from '../components/header/MainHeader';
import Footer from '../components/Footer';
import SecondaryHeader from '../components/header/SecondaryHeader';

import '../css/bootstrap.css'
import '../css/et-line-icons.css'
import '../css/extralayers.css'
import '../css/font-awesome.min.css'
import '../css/full-slider.css'
import '../css/magnific-popup.css'
import '../css/menu-hamburger.css'
import '../css/owl.carousel.css'
import '../css/owl.transitions.css'
import '../css/responsive.css'
import '../css/style.css'
import '../css/text-effect.css'
import '../css/custom.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    let footer = (
      <Footer/>
    )
    if (location.pathname === prefixLink('/')) {
      header = (
        <MainHeader/>
      )
    }
    else {
      header = (
        <SecondaryHeader />
      )
    }
    return (
      <div>
        <div>
          {header}
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          {children}
        </div>
        <div>
          {footer}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
