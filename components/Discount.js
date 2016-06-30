import React from 'react';

class Discount extends React.Component {
  render() {
    return(
      <div className="container-discount">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 text-block text-center">
                <div className="text-block-inner">
                    <p className="text-large text-uppercase no-margin-bottom">Men's Watches</p>
                    <p className="title-small text-uppercase font-weight-600 black-text letter-spacing-1">20% Off</p>
                    <a className="highlight-button btn btn-small no-margin" href="shop-with-sidebar.html">View Collection</a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-block text-center">
                <div className="text-block-inner">
                    <p className="title-small text-uppercase font-weight-600 black-text no-margin-bottom letter-spacing-1">45% Off</p>
                    <p className="text-large text-uppercase">Last Day Sale!</p>
                    <a className="highlight-button btn btn-small no-margin" href="shop-with-sidebar.html">Free Shopping</a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-block text-center">
                <div className="text-block-inner">
                    <p className="text-large text-uppercase no-margin-bottom">Added To Sale</p>
                    <p className="title-small text-uppercase font-weight-600 black-text width-70 center-col letter-spacing-1">New Styles</p>
                    <a className="highlight-button btn btn-small no-margin" href="shop-with-sidebar.html">Shop Now</a>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-block text-center">
                <div className="text-block-inner">
                    <p className="text-large text-uppercase no-margin-bottom">Last 2 Days!</p>
                    <p className="title-small text-uppercase font-weight-600 black-text letter-spacing-1">Summer Sale</p>
                    <a className="highlight-button btn btn-small no-margin" href="shop-with-sidebar.html">Discover Now!</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Discount
