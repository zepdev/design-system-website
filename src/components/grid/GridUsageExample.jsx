import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from './GridContainer'
import GridRow from './GridRow'
import GridCol from './GridCol'

// This is just a demo for usage in markdown files
const GridUsageExample = ({ rows }) => {
  return (
    <GridContainer>
      {rows &&
        rows.map((row, idx) => (
          <GridRow align={row.align} key={`row${idx}`}>
            {row.cols.map((col, iidx) => (
              <GridCol
                key={`row${idx}-col${iidx}`}
                xxs={col.xxs}
                xs={col.xs}
                s={col.s}
                m={col.m}
                l={col.l}
                xl={col.xl}
                align={col.align}
                style={col.inlineStyle}
              >
                <div dangerouslySetInnerHTML={{ __html: col.text }} />
              </GridCol>
            ))}
          </GridRow>
        ))}
    </GridContainer>
  )
}

GridUsageExample.propTypes = {
  rows: PropTypes.array,
}

export default GridUsageExample
