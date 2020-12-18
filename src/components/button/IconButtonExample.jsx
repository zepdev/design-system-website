import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@zlab-de/zel-react/IconButton'
import ZepIconEssentialStar from '@zlab-de/zel-react-icons/ZepIconEssentialStar'

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 30,
  },
}))

function IconButtonExample() {
  const classes = useStyles()
  return (
    <>
      <IconButton variant="primary" className={classes.button}>
        <ZepIconEssentialStar />
      </IconButton>
      <IconButton variant="secondary">
        <ZepIconEssentialStar />
      </IconButton>
    </>
  )
}

export default IconButtonExample
