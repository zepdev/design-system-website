import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  demoGrid: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: `${ theme.spacing.component.xl.rem }rem`,
    paddingBottom: `${ theme.spacing.component.xl.rem }rem`,
    backgroundColor: theme.colors.gray.grayLightest.hex,
  },
  demoGridRow: {},
  demoGridCol: {
    background: theme.colors.primary.indigoBlue.hex,
    color: theme.colors.gray.white.hex,
    border: '1px solid white',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  },
})

const Grid = ({ classes, rows }) => {
  return (
    <>
      <div className={classnames(classes.demoGrid, 'zep-grid')}>
        {rows.map((row, idx) => (
          <div className={classnames(classes.demoGridRow, row.class)} key={`row${ idx }`}>
            {row.cols.map((col, idx) => (
              <div
                className={classnames(classes.demoGridCol, col.class)}
                style={col.style}
                dangerouslySetInnerHTML={{ __html: col.content }}
                key={`col${ idx }`}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
}

export default withStyles(styles)(Grid)
