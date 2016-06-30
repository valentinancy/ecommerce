import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="container-fluid bg-dark-gray footer-bottom">
          <div className="container">
              <div className="row margin-three ">
                  <div className="col-md-6 col-sm-6 col-xs-12 copyright text-left letter-spacing-1 xs-text-center xs-margin-bottom-one">
                      &copy; 2015 H-Code is proudly powered by Radion.
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 footer-logo text-right xs-text-center">
                      <a href="index.html"><img src="../images/logo-light-gray.png" alt=""/></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Footer
