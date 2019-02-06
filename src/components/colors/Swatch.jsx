import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button'
import CopyIcon from '../icons/CopyIcon'

function Swatch({ color, title }) {
  return (
    <div className="zds-swatch--container">
      <Button className="zds-swatch" style={{ background: color }}>
        <span className="zds-swatch--backdrop" />
        <span className="zds-swatch--imageButton">
          <CopyIcon className="zds-swatch--icon"/>
          <span className="zds-swatch--imageTitle">{color}</span>
        </span>
      </Button>
      <p className="zds-swatch--title">{title}</p>
    </div>
  )
}

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Swatch
