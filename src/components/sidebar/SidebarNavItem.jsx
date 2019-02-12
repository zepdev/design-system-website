import React, { Component } from 'react'
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
class SidebarNavItem extends Component {
  state = {
    isButtonOpen: false,
  }

  handleButton = () => {
    this.setState({
      isButtonOpen: !this.state.isButtonOpen,
    })
  }

  render() {
    const { item, classes } = this.props
    const { isButtonOpen } = this.state
    return (
      <li>
        <Button
          fullWidth
          onClick={item['sub-nav'] ? this.handleButton : () => {}}
          className={classes.button}
        >
          {item.title}
        </Button>
        {item['sub-nav'] && isButtonOpen && (
          <ul data-testid="subnav-list" className={classes.list}>
            {Object.keys(item['sub-nav']).map((elem, idx) => (
              <li key={`sni-${ idx }`} className={classes.listItem}>
                <Link
                  to={`/content/${ item.title.toLowerCase().replace(/ /g, '-') }/${ item['sub-nav'][
                    elem
                  ].title
                    .toLowerCase()
                    .replace(/ /g, '-') }`}
                  className="zep-button zep-button__full"
                >
                  {item['sub-nav'][elem].title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }
}

SidebarNavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styles)(SidebarNavItem)
