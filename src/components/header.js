import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import zeppelinIcon from '../images/zeppelin_icon.png'

const Header = ({ siteTitle }) => (
  <header>
    <div
      className="zds-header"
    >
      <div className="zds-header--container zds-header--container__logo">
        <Link to="/">
          <img src={zeppelinIcon} alt="Zeppelin Icon" />
        </Link>
      </div>

      <div className="zds-header--container">
        <h1 className="zds-headline__primary">
          {siteTitle}
        </h1>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
