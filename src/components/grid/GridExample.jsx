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
    paddingTop: `${ theme.spacing.component.xl.rem }rem`,
    paddingBottom: `${ theme.spacing.component.xl.rem }rem`,
    backgroundColor: theme.colors.gray.grayLightest.hex,
  },
  demoGridCol: {
    background: theme.colors.primary.indigoBlue.hex,
    color: theme.colors.gray.white.hex,
    border: '1px solid white',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  },
})

const GridExample = ({ classes, rows }) => {
  return (
    <GridContainer className={classes.demoGrid}>
      {rows &&
        rows.map((row, idx) => (
          <GridRow align={row.align} key={`row${ idx }`}>
            {row.cols.map((col, iidx) => (
              <GridCol
                className={classes.demoGridCol}
                key={`row${ idx }-col${ iidx }`}
                xxs={col.xxs}
                xs={col.xs}
                s={col.s}
                m={col.m}
                l={col.l}
                xl={col.xl}
              >
                {col.text}
              </GridCol>
            ))}
          </GridRow>
        ))}
    </GridContainer>
  )
}

GridExample.propTypes = {
  classes: PropTypes.object,
  rows: PropTypes.array,
}

export default withStyles(styles)(GridExample)
