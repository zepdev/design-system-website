import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    marginBottom: `${ theme.spacing.xxl.rem }rem`,
    borderCollapse: 'collapse',
  },
  th: {
    padding: `${ theme.spacing.s.rem }rem ${ theme.spacing.l.rem }rem`,
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
})

const Table = ({ header, content, title, classes }) => {
  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <caption className="zep-visually-hidden">{title}</caption>
        <thead className={classes.header}>
          <tr className={classes.tr}>
            {header.map(elem => (
              <th
                scope="col"
                className={classnames(classes.th, 'zep-typo--normal-1', {
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
        {content && (
          <tbody className={classes.tbody}>
            {Object.keys(content).map(elem => (
              <tr key={`row_${ elem }`} className={classes.tr}>
                {header.map((item, idx) => (
                  <td
                    className={classnames(
                      classes.th,
                      classes.borderBottom,
                      item !== 'actual size' ? 'zep-typo--normal-2' : `${ elem }`
                    )}
                    key={`typography${ idx }`}
                    scope={idx === 0 ? 'row' : null}
                  >
                    {item === 'actual size' ? (
                      'lorem ipsum'
                    ) : item === 'name' ? (
                      elem
                    ) : item === 'specifications' ? (
                      <span>
                        {content[elem][item].map(p => (
                          <p key={`specification_${ p }`} className="zep-typo--normal-2">
                            {p}
                          </p>
                        ))}
                      </span>
                    ) : content[elem][item] ? (
                      content[elem][item]
                    ) : (
                      '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Table)
