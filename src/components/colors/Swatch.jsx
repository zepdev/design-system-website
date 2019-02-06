import React from 'react'
import PropTypes from 'prop-types'

function Swatch({ color, title }) {
  return (
    <div className="zds-swatch--container">
      <div className="zds-swatch" style={{ background: color }} />
      <p className="zds-swatch--title">{title}</p>
    </div>
  )
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Swatch
