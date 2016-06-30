import React from 'react';
import { prefixLink } from 'gatsby-helpers';
import { Link } from 'react-router'

class MainHeader extends React.Component {
  render() {
    return(
      <div className="main-header">
      <nav className="navbar navbar-default navbar-fixed-top nav-transparent overlay-nav sticky-nav nav-border-bottom bg-white shop-nav" role="navigation">
          <div className="container">
              <div className="row">
                  <div className="col-md-2 pull-left"><a className="logo-light" href=""><img alt="" src="images/logo-light.png" className="logo" /></a></div>
                  <div class="col-md-2 no-padding-left search-cart-header pull-right">
                      <div id="top-search">
                          <a href="#search-header" className="header-search-form"><i className="fa fa-search search-button"></i></a>
                      </div>
                      <form id="search-header" method="post" action="#" name="search-header" className="mfp-hide search-form-result">
                          <div class="search-form position-relative">
                              <button type="submit" className="fa fa-search close-search search-button"></button>
                              <input type="text" name="search" className="search-input" placeholder="Enter your keywords..." autocomplete="off"/>
                          </div>
                      </form>
                  </div>
                  <div class="navbar-header col-sm-8 col-xs-2 pull-right">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                  </div>
                  <div className="col-md-8 no-padding-right accordion-menu text-right menu-header">
                      <div className="navbar-collapse collapse">
                          <ul id="accordion" className="nav navbar-nav navbar-right panel-group">
                              <li key="/men/" className="dropdown panel">
                                <Link to={prefixLink('/men/')}>
                                  Men <i class="fa fa-angle-down"></i>
                                </Link>
                              </li>
                              <li key="/women/" className="dropdown panel"><a href="">Women<i class="fa fa-angle-down"></i></a>

                              </li>
                              <li className="dropdown panel"><a href="">Accessories</a></li>
                              <li className="dropdown panel"><a href="">Sale</a></li>
                              <li className="dropdown panel"><a href="#">
                                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                  <div className="subtitle snipcart-checkout">my cart</div>
                              </a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
      </div>
    )
  }
}

export default MainHeader
