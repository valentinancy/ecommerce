import React from 'react';

class FashionNews extends React.Component {
  render() {
    return(
      <div className="fashion-box fashion-fashion">
        <div className="fashion-fashion">
        <div className="">
            <div className="col-md-12 text-center fashion">
                <h3 className="section-title">Fashion News</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12 blog-listing no-margin-bottom wow fadeIn xs-margin-bottom-seven" data-wow-duration="600ms">
                <div className="blog-image"><a href="blog-single-right-sidebar.html"><img src="images/blog-post31.jpg" alt=""/></a></div>
                <div className="blog-details">
                    <div className="blog-date">Posted by <a href="blog-masonry-2columns.html">Paul Scrivens</a> | 02 January 2015</div>
                    <div className="blog-title"><a href="blog-single-right-sidebar.html">Our latest collection review</a></div>
                    <div className="separator-line bg-black no-margin-lr no-margin-bottom"></div>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 blog-listing no-margin-bottom wow fadeIn xs-margin-bottom-seven" data-wow-duration="600ms">
                <div className="blog-image"><a href="blog-single-right-sidebar.html"><img src="images/blog-post32.jpg" alt=""/></a></div>
                <div className="blog-details">
                    <div className="blog-date">Posted by <a href="blog-masonry-2columns.html">Nathan Ford</a> | 01 January 2015</div>
                    <div className="blog-title"><a href="blog-single-right-sidebar.html">Winter sale so hurry up!</a></div>
                    <div className="separator-line bg-black no-margin-lr no-margin-bottom"></div>
                </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 blog-listing no-margin-bottom wow fadeIn" data-wow-duration="600ms">
                <div className="blog-image"><a href="blog-single-right-sidebar.html"><img src="images/blog-post33.jpg" alt=""/></a></div>
                <div className="blog-details">
                    <div className="blog-date">Posted by <a href="blog-masonry-2columns.html">Aarron Walter</a> | 01 January 2015</div>
                    <div className="blog-title"><a href="blog-single-right-sidebar.html">Discount 20% sale so don't late</a></div>
                    <div className="separator-line bg-black no-margin-lr no-margin-bottom"></div>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default FashionNews
