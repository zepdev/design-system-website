import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import IconButton from '../button/IconButton'
import PreviousPageIcon from '../icons/PreviousPageIcon'
import NextPageIcon from '../icons/NextPageIcon'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

const Pagination = ({ className: classNameProp, count }) => {
  const numbers = new Array(4).fill(0)
  console.log(numbers)
  return (
    <div className={classnames('zep-pagination', classNameProp)}>
      <IconButton>
        <PreviousPageIcon className="zep-button__icon" />
      </IconButton>
      <IconButton>
        <ChevronLeftIcon className="zep-button__icon" />
      </IconButton>
      {numbers.map((elem, idx) => (
        <button key={`pagination${ idx }`} className="zep-button zep-button-pagination">
          {idx + 1}
        </button>
      ))}
      <IconButton>
        <ChevronRightIcon className="zep-button__icon" />
      </IconButton>
      <IconButton>
        <NextPageIcon className="zep-button__icon" />
      </IconButton>
    </div>
  )
}

Pagination.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
}

export default Pagination
