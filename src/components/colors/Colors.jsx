import React from 'react'
import { colors } from '../../data/theme'
import Swatch from './Swatch'

function Colors() {
  console.log(colors)
  return (
    <div>
      {colors.map((elem, idx) => (
        <Swatch title={colors[idx]} color={elem} />
      ))}
    </div>
  )
}

export default Colors
