import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './sidebar/Sidebar'
import '../styles/layout.scss'

class Layout extends Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  render() {
    const { children } = this.props
    const { isMenuOpen } = this.state

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div className="zds-site">
            <Sidebar isMenuOpen={isMenuOpen} />
            <div className="zds-content">
              <Header
                siteTitle={data.site.siteMetadata.title}
                handleMenu={this.handleMenu}
              />
              <main>
                <div className="zds-main">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
