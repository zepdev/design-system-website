import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridContainer from './GridContainer'
import GridRow from './GridRow'
import GridCol from './GridCol'
import RadioGroup from '../radio/RadioGroup'
import Radio from '../radio/Radio'

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    padding: `${ theme.space.xl.rem }rem`,
    backgroundColor: theme.color.text.white,
    marginBottom: `${ theme.space.xxl.rem }rem`,
  },
  gridContainer: {
    marginBottom: `${ theme.space.m.rem }rem`,
    border: `1px solid ${ theme.indigo.primary }`,
  },
  gridRow: {
    minHeight: 100,
  },
  gridCol: {
    background: theme.indigo.primary,
    color: '#fff',
    border: '1px solid white',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  },
  radioGroup: {
    marginBottom: 15,
  },
  radio: {
    display: 'inline-block',
    marginRight: 10,
  },
  radioGroupLegend: {
    color: theme.color.text.lightGray,
    marginBottom: 5,
  },
}))
// This is just a demo for usage in markdown files
const GridExample = () => {
  const classes = useStyles()
  const [alignRow, setAlignRow] = useState('baseline')
  const [alignCol, setAlignCol] = useState('none')
  const [xxs, setXXS] = useState(1)
  const [xs, setXS] = useState(1)
  const [s, setS] = useState(1)
  const [m, setM] = useState(1)
  const [l, setL] = useState(1)
  const [xl, setXL] = useState(1)

  const align = [
    'stretch',
    'flex-end',
    'center',
    'flex-start',
    'baseline',
    'none',
  ]
  const xxsVals = [1, 2, 3, 4]
  const xsVals = [1, 2, 3, 4, 5, 6]
  const sVals = [1, 2, 3, 4, 5, 6]
  const mVals = [1, 2, 3, 4, 5, 6, 7, 8]
  const lVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const xlVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className={classes.root}>
      <GridContainer className={classes.gridContainer}>
        <GridRow
          align={alignRow === 'none' ? null : alignRow}
          className={classes.gridRow}
        >
          {[1, 2, 3, 4].map(elem => (
            <GridCol
              xxs={xxs}
              xs={xs}
              s={s}
              m={m}
              l={l}
              xl={xl}
              align={
                alignCol === 'none' ? null : elem === 1 ? alignCol : 'baseline'
              }
              className={classes.gridCol}
              key={`gridCol${ elem }`}
            >
              Col {elem}
            </GridCol>
          ))}
        </GridRow>
      </GridContainer>
      <div className={classes.radioContainer}>
        <RadioGroup
          title={`Align All Cols = 'zep-grid__row--align-items-${ alignRow }'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {align.map(elem => (
            <Radio
              key={`alignRow${ elem }`}
              name={`alignRow${ elem }`}
              label={elem}
              value={elem}
              checked={elem === alignRow}
              onChange={e => {
                setAlignRow(e.target.value)
                setAlignCol('none')
              }}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`Align Col 1 = 'zep-grid__col--align-items-${ alignCol }'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {align.map(elem => (
            <Radio
              key={`alignCol${ elem }`}
              name={`alignCol${ elem }`}
              label={elem}
              value={elem}
              checked={elem === alignCol}
              onChange={e => {
                setAlignCol(e.target.value)
                setAlignRow('none')
              }}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`XXS = 'zep-grid__col--xxs-${ xxs }-4'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {xxsVals.map(elem => (
            <Radio
              key={`XXS${ elem }`}
              name={`xxs${ elem }`}
              label={elem}
              value={elem}
              checked={String(elem) === String(xxs)}
              onChange={e => setXXS(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`XS = 'zep-grid__col--xs-${ xs }-6'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {xsVals.map(elem => (
            <Radio
              key={`XS${ elem }`}
              name={`xs${ elem }`}
              label={elem}
              value={elem}
              checked={elem === xs}
              onChange={e => setXS(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`S = 'zep-grid__col--s-${ xs }-6'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {sVals.map(elem => (
            <Radio
              key={`S${ elem }`}
              name={`s${ elem }`}
              label={elem}
              value={elem}
              checked={elem === s}
              onChange={e => setS(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`M = 'zep-grid__col--m-${ m }-8'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {mVals.map(elem => (
            <Radio
              key={`M${ elem }`}
              name={`m${ elem }`}
              label={elem}
              name={elem}
              value={elem}
              checked={elem === m}
              onChange={e => setM(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`L = 'zep-grid__col--l-${ l }-12'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {lVals.map(elem => (
            <Radio
              key={`L${ elem }`}
              name={`l${ elem }`}
              label={elem}
              value={elem}
              checked={elem === l}
              onChange={e => setL(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
        <RadioGroup
          title={`XL = 'zep-grid__col--x-${ xl }-12'`}
          className={classes.radioGroup}
          classNameLegend={classes.radioGroupLegend}
        >
          {xlVals.map(elem => (
            <Radio
              key={`XL${ elem }`}
              name={`xl${ elem }`}
              label={elem}
              value={elem}
              checked={elem === xl}
              onChange={e => setXL(Number(e.target.value))}
              className={classes.radio}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

GridExample.propTypes = {
  classes: PropTypes.object,
}

export default GridExample
