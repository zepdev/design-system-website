import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import clsx from 'clsx'
import Table from './Table'
import TableHeader from './TableHeader'
import TableCell from './TableCell'
import TableBody from './TableBody'
import TableRow from './TableRow'
import Tabs from '../tabs/Tabs'
import Tab from '../tabs/Tab'

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
  tabs: {
    marginBottom: `${ theme.spacing.component.l.rem }rem`,
  },
  inverse: {
    background: theme.colors.gray.black.hex,
    color: 'rgba(255, 255, 255, 0.84)',
  },
  inverseLight: {
    background: theme.colors.gray.grayMidDark.hex,
    color: 'rgba(255, 255, 255, 0.84)',
  },
})

const ContentTable = ({ header, content, title, classes }) => {
  const [value, setValue] = useState(0)

  function handleChange(newValue) {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onClick={handleChange} className={classes.tabs}>
        <Tab label="Default" />
        <Tab label="Inverse" />
      </Tabs>
      <div className={classes.root}>
        <Table className={classes.table} title={title}>
          <TableHeader>
            {header.map(elem => (
              <TableCell
                className={clsx({
                  [classes.lowercase]: elem === 'rem' || elem === 'px',
                  [classes.capitalize]: elem !== 'rem' && elem !== 'px',
                  [classes.inverse]: value === 1,
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
                <TableRow
                  key={`row_${ elem }`}
                  color={idx % 2 === 0 ? 'white' : 'gray'}
                  className={
                    value === 1
                      ? idx % 2 === 0
                        ? classes.inverseLight
                        : classes.inverse
                      : null
                  }
                >
                  {header.map((item, idx) =>
                    idx === 0 ? (
                      <TableCell
                        key={`typography${ idx }`}
                        scope="row"
                        component="th"
                      >
                        {item === 'actual size' ? (
                          'lorem ipsum'
                        ) : item === 'name' ? (
                          elem
                        ) : item === 'specifications' ? (
                          <span>
                            {content[elem][item].map(p => (
                              <p
                                key={`specification_${ p }`}
                                className={
                                  value === 1
                                    ? 'zep-typo--normal-body2-inverse'
                                    : 'zep-typo--normal-body2'
                                }
                              >
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
                        className={clsx({
                          [elem]: item === 'actual size' && value === 0,
                          [`${ elem }-inverse`]:
                            item === 'actual size' && value === 1,
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
                              <p
                                key={`specification_${ p }`}
                                className={
                                  value === 1
                                    ? 'zep-typo--normal-body2-inverse'
                                    : 'zep-typo--normal-body2'
                                }
                              >
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
    </>
  )
}

ContentTable.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(ContentTable)
