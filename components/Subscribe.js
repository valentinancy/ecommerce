import React from 'react';

class Subscribe extends React.Component {
  render() {
    return(
      <div className="subscribe">
        <div className="col-md-4 col-sm-12 no-padding"><a href="shop-with-sidebar.html"><img src="images/banner3.jpg" alt=""/></a></div>
          <div className="col-md-4 col-sm-12 shop-newsletter-main">
              <div className="shop-newsletter text-center">
                  <i className="icon-envelope medium-icon white-text margin-five no-margin-top"></i>
                  <p className="text-med text-uppercase letter-spacing-2 light-gray-text no-margin lg-display-block lg-margin-bottom-three">Subscribe for newsletter</p>
                  <p className="title-large font-weight-700 text-uppercase letter-spacing-2 white-text lg-display-none">Stay in touch </p>
                  <input type="text" name="name" placeholder="Enter Your Email" className="no-margin"/>
                  <a className="btn-small-white-background btn btn-small margin-five no-margin-right no-margin-bottom" href="#">Subscribe Now!</a>
              </div>
          </div>
        <div className="col-md-4 col-sm-12 no-padding"><a href="shop-with-sidebar.html"><img src="images/banner4.jpg" alt=""/></a></div>
      </div>
    )
  }
}

export default Subscribe
