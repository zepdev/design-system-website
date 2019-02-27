import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import withStyles from 'react-jss'
import Button from '../button/Button'

const styles = {
  button: {
    textTransform: 'capitalize',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginLeft: '1rem',
  },
}

function SidebarNavItem({ item, classes }) {
  const [isButtonOpen, setButton] = useState(false)
  return (
    <li>
      {item.subnav && (
        <Button fullWidth onClick={() => setButton(!isButtonOpen)} className={classes.button}>
          {item.title}
        </Button>
      )}
      {!item.subnav && (
        <Link
          to={`/content/${ item.title.toLowerCase().replace(/ /g, '-') }`}
          className="zep-button zep-button__full"
        >
          {item.title}
        </Link>
      )}
      {item.subnav && isButtonOpen && (
        <ul data-testid="subnav-list" className={classes.list}>
          {Object.keys(item.subnav).map((elem, idx) => (
            <li key={`sublistitem${ idx }`} className={classes.listItem}>
              <Link
                to={`/content/${ item.title.toLowerCase().replace(/ /g, '-') }/${ item.subnav[
                  elem
                ].title
                  .toLowerCase()
                  .replace(/ /g, '-') }`}
                className="zep-button zep-button__full"
                data-testid="sidebarNavItemLink"
              >
                {item.subnav[elem].title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

SidebarNavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styles)(SidebarNavItem)
