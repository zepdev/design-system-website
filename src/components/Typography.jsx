import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import theme from '../data/theme'
import withStyles from 'react-jss'

const styles = theme => ({
  table: {
    width: '100%',
    marginBottom: theme.spacing.xl * 2,
    borderCollapse: 'collapse',
    overflowX: 'scroll',
  },
  th: {
    padding: `${ theme.spacing.m }px ${ theme.spacing.l }px`,
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

const Typography = ({ section, classes }) => {
  const header =
    section === 'basics'
      ? ['specification', 'px', 'rem', 'weight']
      : ['name', 'rem', 'px', 'specifications', 'actual size']
  const content =
    section === 'basics' ? theme.typography.basics : theme.typography.headings[section]

  return (
    <table className={classes.table}>
      <caption className="visually-hidden">{`${ section } typography variations`}</caption>
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
        {Object.keys(content).map(elem => (
          <tr key={`row_${ elem }`} className={classes.tr}>
            {header.map((item, idx) => (
              <td
                className={classnames(
                  classes.th,
                  classes.lowercase,
                  classes.borderBottom,
                  item !== 'actual size' ? 'zep-typo--special-1' : `${ elem }`
                )}
                key={`typography${ idx }`}
                scope={idx === 0 ? 'row' : null}
              >
                {item === 'actual size' ? (
                  'Lorem Ipsum'
                ) : item === 'name' ? (
                  elem
                ) : item === 'specifications' ? (
                  <span>
                    {content[elem][item].map(p => (
                      <p key={`specification_${ p }`} className="zep-typo--normal-8">
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
    </table>
  )
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
}

export default withStyles(styles)(Typography)
