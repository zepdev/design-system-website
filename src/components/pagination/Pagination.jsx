import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import IconButton from '../button/IconButton'
import PreviousPageIcon from '../icons/PreviousPageIcon'
import NextPageIcon from '../icons/NextPageIcon'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

const Pagination = ({
  className: classNameProp,
  pages: pagesProp,
  pagesToDisplay,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Array.from({ length: pagesProp }, (v, k) => k + 1)
  const pages = Number(pagesProp)
  // needs to splice so that the number of page buttons displayed are pages to Display
  return (
    <div className={classnames('zep-pagination', classNameProp)}>
      <IconButton onClick={() => onPageChange(0)} disabled={currentPage === 1}>
        <PreviousPageIcon className="zep-button__icon" />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="zep-button__icon" />
      </IconButton>
      {totalPages.map(elem => (
        <button
          key={`pagination${ elem }`}
          className={classnames('zep-button zep-button-pagination', {
            'zep-pagination--selected': currentPage === elem,
          })}
          onClick={() => onPageChange(elem)}
        >
          {elem}
        </button>
      ))}
      <IconButton
        onClick={() => onPageChange(currentPage === pages ? pages : currentPage + 1)}
        disabled={currentPage === pages}
      >
        <ChevronRightIcon className="zep-button__icon" />
      </IconButton>
      <IconButton onClick={() => onPageChange(pages)} disabled={currentPage === pages}>
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
