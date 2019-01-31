import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../styles/layout.scss'

const Layout = ({ children }) => (
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
        <Sidebar />
        <div className="zds-content">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            <div className="zds-main">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
