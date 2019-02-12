import React from 'react'
import theme from '../data/theme'

const Typography = () => (
  <div>
    {Object.keys(theme.typography.headings).map((elem, idx) => (
      <p className={theme.typography.headings[idx]} key={`typography${ idx }`}>
        {theme.typography.headings[idx]}
      </p>
    ))}
  </div>
)

export default Typography
