import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div className="container footer-middle">
          <div className="row">
              <div className="col-md-3 col-sm-3 footer-link1 xs-display-none">
                  <h5>About Us</h5>
                  <p className="footer-text about-links">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-4 footer-link2 col-md-offset-2">
                  <h5>Company</h5>
                  <ul className="about-links">
                      <li><a href="about-us.html">About Company</a></li>
                      <li><a href="about-us.html">What We Do</a></li>
                      <li><a href="about-us.html">What We Think</a></li>
                      <li><a href="careers.html">Careers</a></li>
                  </ul>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-4  footer-link3">
                  <h5>Services</h5>
                  <ul className="about-links">
                      <li><a href="services.html">Web Development</a></li>
                      <li><a href="services.html">Graphic Design</a></li>
                      <li><a href="services.html">Copywriting</a></li>
                      <li><a href="services.html">Online Marketing</a></li>
                  </ul>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-4  footer-link4">
                  <h5>Introduction</h5>
                  <ul className="about-links">
                      <li><a href="team-members.html">Team Members</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li><a href="our-clients.html">Our Clients</a></li>
                      <li><a href="careers.html">Careers With Us</a></li>
                  </ul>
              </div>
          </div>
          <div className="wide-separator-line bg-mid-gray no-margin-lr margin-three no-margin-bottom"></div>
          <div className="row margin-four no-margin-bottom">
              <div className="col-md-6 col-sm-12 sm-text-center sm-margin-bottom-four">
                  <ul className="list-inline footer-link text-uppercase">
                      <li><a href="about-us.html"><h5>About</h5></a></li>
                      <li><a href="blog-masonry-3columns.html"><h5>Blog</h5></a></li>
                      <li><a href="careers.html"><h5>Careers</h5></a></li>
                      <li><a href="testimonials.html"><h5>Testimonials</h5></a></li>
                      <li><a href="contact-us.html"><h5>Contact</h5></a></li>
                  </ul>
              </div>
              <div className="col-md-6 col-sm-12 footer-social text-right sm-text-center">
                  <a target="_blank" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
                  <a target="_blank" href="https://plus.google.com"><i class="fa fa-google-plus"></i></a>
                  <a target="_blank" href="https://dribbble.com/"><i class="fa fa-dribbble"></i></a>
                  <a target="_blank" href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
              </div>
          </div>
      </div>
    )
  }
}

export default About
