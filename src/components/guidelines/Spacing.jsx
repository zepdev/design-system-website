import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from 'react-jss'
import { spacing } from 'zeppelin-element-library/bundle/themes/theme.json'

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    marginBottom: theme.spacing.component.xl.px * 2,
    borderCollapse: 'collapse',
  },
  th: {
    padding: `${ theme.spacing.component.m.px }px ${ theme.spacing.component.l.px }px`,
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
    <div className={classes.root}>
      <table className={classes.table}>
        <caption className="zep-visually-hidden">Spacing Scale</caption>
        <thead className={classes.header}>
          <tr className={classes.tr}>
            {header.map(elem => (
              <th
                scope="col"
                className={clsx(classes.th, 'zep-typo--normal-1', {
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
          {Object.keys(spacing.component).map(elem => (
            <tr key={`row_${ elem }`} className={classes.tr}>
              {header.map((item, idx) => (
                <td
                  className={clsx(
                    classes.th,
                    classes.borderBottom,
                    'zep-typo--normal-body2'
                  )}
                  key={`spacing${ idx }`}
                  scope={idx === 0 ? 'row' : null}
                >
                  {item === 'actual size' ? (
                    <div
                      style={{
                        width: spacing.component[elem].px,
                        height: spacing.component[elem].px,
                        color: 'green',
                      }}
                      className={classes.square}
                    />
                  ) : item === 'name' ? (
                    `zep-spacing--${ elem }`
                  ) : item === 'px' ? (
                    `${ spacing.component[elem][item] }px`
                  ) : (
                    `${ spacing.component[elem][item] }rem`
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Spacing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Spacing)
