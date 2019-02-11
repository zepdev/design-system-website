import React from 'react'
import { colors } from '../../data/theme'
import Swatch from './Swatch'

function Colors() {
  return (
    <div className="zds-colors--container">
      {Object.keys(colors).map((elem, idx) => (
        <Swatch title={elem} color={colors[elem]} key={`swatch${ idx }`} />
      ))}
    </div>
  )
}

export default Colors
