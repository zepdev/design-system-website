import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import GridContainer from './GridContainer'
import GridRow from './GridRow'
import GridCol from './GridCol'

const styles = theme => ({
  demoGrid: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: `${theme.spacing.component.xl.rem}rem`,
    paddingBottom: `${theme.spacing.component.xl.rem}rem`,
    backgroundColor: theme.color.gray.grayLightest.hex,
  },
  demoGridCol: {
    background: theme.theme.indigo.primary,
    color: theme.color.gray.white.hex,
    border: '1px solid white',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  },
  demoGridColBaseline: {
    paddingTop: '30px',
  },
})
// This is just a demo for usage in markdown files
const GridUsageExample = ({ classes, rows }) => {
  return (
    <GridContainer className={classes.demoGrid}>
      {rows &&
        rows.map((row, idx) => (
          <GridRow align={row.align} key={`row${idx}`}>
            {row.cols.map((col, iidx) => (
              <GridCol
                className={classes.demoGridCol}
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
  classes: PropTypes.object,
  rows: PropTypes.array,
}

export default withStyles(styles)(GridUsageExample)
