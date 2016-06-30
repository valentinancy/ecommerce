  import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'
import About from 'components/About'
import Footer from 'components/Footer'


class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown text-center">
          <h1>{post.title}</h1>
          <div className="row">
            <div className="col-md-4 col-md-offset-2">
              <img src={post.image}/>
            </div>
            <div className="col-md-4 item-description">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <p>{post.description}</p>
              <button
                href='#'
                className='snipcart-add-item btn btn-default'
                data-item-id={post.id}
                data-item-price={post.price}
                data-item-image={post.image}
                data-item-name={post.title}
                data-item-description={post.description}
                data-item-url={"http://localhost:8000" + post.path}>
                Buy
              </button>
            </div>
          </div>
          {/*<div dangerouslySetInnerHTML={{ __html: post.body }} />*/}

          <About />
          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
