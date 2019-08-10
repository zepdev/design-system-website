import React from 'react'
import withStyles from 'react-jss'
import Button from '@zlab-de/zel-react/Button'
import ZepiconsStar from '@zlab-de/zel-react-icons/ZepiconsStar'

const styles = theme => ({
  container: {
    display: `flex`,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: `${ theme.spacing.component.s.rem }rem`,
    marginBottom: `${ theme.spacing.component.s.rem }rem`,
  },
  heading: {
    marginBottom: `${ theme.spacing.component.s.rem }rem`,
  },
  fullWidth: {
    border: `1px solid ${ theme.colors.gray.grayMid.hex }`,
    padding: `${ theme.spacing.component.s.rem }rem`,
    width: 200,
  },
})

function ButtonExample({ classes }) {
  const handleClick = () => {
    alert("I'm a Button!")
  }
  return (
    <>
      <p className={classes.heading}>Primary</p>
      <div className={classes.container}>
        <Button variant="primary" onClick={handleClick}>
          Primary
        </Button>
        <Button variant="primary" size="small" onClick={handleClick}>
          Primary Small
        </Button>
        <Button variant="primary" disabled onClick={handleClick}>
          Primary Disabled
        </Button>
      </div>
      <div className={classes.container}>
        <Button variant="primary" fullWidth onClick={handleClick}>
          Primary Full Width
        </Button>
      </div>
      <p className={classes.heading}>Secondary</p>

      <div className={classes.container}>
        <Button variant="secondary" onClick={handleClick}>
          Secondary
        </Button>
        <Button variant="secondary" size="small" onClick={handleClick}>
          Secondary Small
        </Button>
        <Button variant="secondary" disabled onClick={handleClick}>
          Secondary Disabled
        </Button>
      </div>
      <div className={classes.container}>
        <Button variant="secondary" fullWidth onClick={handleClick}>
          Secondary Full Width
        </Button>
      </div>
      <p className={classes.heading}>Primary</p>
      <div className={classes.container}>
        <Button variant="tertiary" onClick={handleClick}>
          <ZepiconsStar />
          Tertiary
        </Button>
        <Button variant="tertiary" size="small" onClick={handleClick}>
          <ZepiconsStar />
          Tertiary Small
        </Button>
        <Button variant="tertiary" disabled onClick={handleClick}>
          <ZepiconsStar />
          Tertiary Disabled
        </Button>
      </div>
      <div className={classes.container}>
        <Button variant="tertiary" fullWidth onClick={handleClick}>
          <ZepiconsStar />
          Tertiary Full Width
        </Button>
      </div>
    </>
  )
}

export default withStyles(styles)(ButtonExample)