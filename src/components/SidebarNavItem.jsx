import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { Link } from 'gatsby'

class SidebarNavItem extends Component {
  render() {
    const { item } = this.props

    return (
      <li>
        <Button fullWidth>{item.title}</Button>
        {item['sub-nav'] && (
          <ul className="zds-sidebar--list">
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
