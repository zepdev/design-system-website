import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button'
import { Link } from 'gatsby'

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
    const { item } = this.props
    const { isButtonOpen } = this.state
    return (
      <li>
        <Button
          fullWidth
          onClick={item['sub-nav'] ? this.handleButton : () => {}}
          className={item['sub-nav'] && 'zds-button__collapsable'}
        >
          {item.title}
        </Button>
        {item['sub-nav'] && isButtonOpen && (
          <ul data-testid="subnav-list" className="zds-sidebar--list">
            {Object.keys(item['sub-nav']).map((elem, idx) => (
              <li key={`sni-${idx}`}>
                <Link
                  to={`/content/${item.title
                    .toLowerCase()
                    .replace(/ /g, '-')}/${item['sub-nav'][elem].title
                    .toLowerCase()
                    .replace(/ /g, '-')}`}
                  className="zds-sidebar--nav-subitem zds-button zds-button__full"
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
  item: PropTypes.object.isRequired,
}

export default SidebarNavItem
