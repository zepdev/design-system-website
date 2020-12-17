import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from './Table'
import TableHeader from './TableHeader'
import TableCell from './TableCell'
import TableBody from './TableBody'
import TableRow from './TableRow'

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    marginBottom: `${theme.space.xxl.rem}rem`,
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
}))

function TypographyExample({ content, title }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Table className={classes.table} title={title}>
          <TableHeader>
            <TableCell>Name</TableCell>
            <TableCell>Specifications</TableCell>
          </TableHeader>
          {content && (
            <TableBody>
              {Object.keys(content).map((elem, idx) => (
                <TableRow key={`row_${elem}`} color={'white'}>
                  <TableCell
                    key={`typography${idx}`}
                    scope="row"
                    component="th"
                    className={elem}
                  >
                    {elem}
                  </TableCell>
                  <TableCell>
                    <span>
                      {Object.keys(content[elem]).map(p => (
                        <p
                          key={`specification_${p}`}
                          className="zep-typo--body-small"
                        >
                          {p === 'breakpoint'
                            ? `fontSize XS: ${content[elem][p]['xs']['font-size']} | line-height XS: ${content[elem][p]['xs']['line-height']} `
                            : `${p} : ${content[elem][p]}`}
                        </p>
                      ))}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  )
}

TypographyExample.propTypes = {
  content: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default TypographyExample
