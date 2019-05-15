import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Table from './Table'
import TableHeader from './TableHeader'
import TableCell from './TableCell'
import TableBody from './TableBody'
import TableRow from './TableRow'

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    marginBottom: `${ theme.spacing.component.xxl.rem }rem`,
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
})

const ContentTable = ({ header, content, title, classes }) => {
  return (
    <div className={classes.root}>
      <Table className={classes.table} title={title}>
        <TableHeader>
          {header.map(elem => (
            <TableCell
              className={classnames({
                [classes.lowercase]: elem === 'rem' || elem === 'px',
                [classes.capitalize]: elem !== 'rem' && elem !== 'px',
              })}
              key={`header_${ elem }`}
            >
              {elem}
            </TableCell>
          ))}
        </TableHeader>
        {content && (
          <TableBody>
            {Object.keys(content).map((elem, idx) => (
              <TableRow key={`row_${ elem }`} color={idx % 2 === 0 ? 'white' : 'gray'}>
                {header.map((item, idx) =>
                  idx === 0 ? (
                    <TableCell key={`typography${ idx }`} scope="row" component="th">
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
                    </TableCell>
                  ) : (
                    <TableCell
                      className={classnames({
                        [elem]: item === 'actual size',
                      })}
                      key={`typography${ idx }`}
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
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </div>
  )
}

ContentTable.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(ContentTable)
