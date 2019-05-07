import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'

const styles = theme => ({
  demoGrid: {
    boxSizing: 'border-box',
    width: '100%',
    marginBottom: '2rem',
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

const Grid = ({ classes }) => {
  return (
    <>
      <div className={classnames(classes.demoGrid, 'zep-grid')}>
        <div className={classnames(classes.demoGridRow, 'zep-grid__row')}>
          {[1, 2, 3, 4].map(n => {
            return (
              <div
                key={n}
                className={classnames(
                  classes.demoGridCol,
                  'zep-grid__col',
                  'zep-grid__col--xxs-1-4',
                  'zep-grid__col--xs-3-6',
                  'zep-grid__col--m-2-8',
                  'zep-grid__col--l-3-12'
                )}
              >
                Column {n}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

Grid.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Grid)
