import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Cover from 'components/Cover'
import Subscribe from 'components/Subscribe'
import FashionNews from 'components/FashionNews'
import Discount from 'components/Discount'
import Label from 'components/Label'
import About from 'components/About'
import Advantage from 'components/Advantage'
import Footer from 'components/Footer'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
        if(location.pathname === prefixLink('/')){
          if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
          const title = access(page, 'data.title') || page.path
          const image = access(page, 'data.image') || page.path
          const price = access(page, 'data.price') || page.path
          pageLinks.push(
            <div key={page.path} className="col-md-4 text-center">
            <li
              key={page.path}
              style={{
                marginBottom: rhythm(1/4),
              }}
            >
                <Link to={prefixLink(page.path)}>
                <img className="item-box row" src={image}/>
                  <span className="row product-name text-uppercase"><p>{title}</p></span>
                  <span className="row price black-text"><p>Rp. {price}</p></span>
                </Link>
            </li>
            </div>
          )
        }
      }
      else if (location.pathname === prefixLink('/men/')){
        <div>
        </div>
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <div className="cover">
            <Cover />
          </div>
          <div className="item-container-box">
            <ul>
              {pageLinks}
            </ul>
          </div>
          <div>
            <Subscribe/>
          </div>
          <div>
            <FashionNews/>
          </div>
          <div>
            <Discount/>
          </div>
          <div>
            <Label/>
          </div>
          <div>
            <About />
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
