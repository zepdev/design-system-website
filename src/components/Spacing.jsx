import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from 'react-jss'
import theme from '../data/theme'

const styles = theme => ({
  table: {
    width: '100%',
    marginBottom: theme.spacing.xl.px * 2,
    borderCollapse: 'collapse',
    overflowX: 'scroll',
  },
  th: {
    padding: `${ theme.spacing.m.px } ${ theme.spacing.l.px }`,
    textAlign: 'left',
    display: 'table-cell',
  },
  tr: {
    display: 'table-row',
  },
  tbody: {
    display: 'table-row-group',
  },
  header: {
    background: theme.colors.gray.grayLightest.hex,
    display: 'table-header-group',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  borderBottom: {
    borderBottom: `1px solid ${ theme.colors.gray.grayLighter.hex }`,
  },
  square: {
    background: theme.colors.primary.indigoBlue.hex,
  },
})

const Spacing = ({ classes }) => {
  const header = ['name', 'px', 'rem', 'actual size']

  return (
    <table className={classes.table}>
      <caption className="visually-hidden">Spacing Scale</caption>
      <thead className={classes.header}>
        <tr className={classes.tr}>
          {header.map(elem => (
            <th
              scope="col"
              className={classnames(classes.th, 'zep-typo--normal-8', {
                [classes.lowercase]: elem === 'rem' || elem === 'px',
                [classes.capitalize]: elem !== 'rem' && elem !== 'px',
              })}
              key={`header_${ elem }`}
            >
              {elem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {Object.keys(theme.spacing).map(elem => (
          <tr key={`row_${ elem }`} className={classes.tr}>
            {header.map((item, idx) => (
              <td
                className={classnames(classes.th, classes.borderBottom, 'zep-typo--normal-7')}
                key={`spacing${ idx }`}
                scope={idx === 0 ? 'row' : null}
              >
                {item === 'actual size' ? (
                  <div
                    style={{
                      width: theme.spacing[elem].px,
                      height: theme.spacing[elem].px,
                      color: 'green',
                    }}
                    className={classes.square}
                  />
                ) : item === 'name' ? (
                  `zep-spacing--${ elem }`
                ) : (
                  theme.spacing[elem][item]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Spacing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Spacing)
