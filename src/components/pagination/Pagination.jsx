import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import IconButton from '../button/IconButton'
import PreviousPageIcon from '../icons/PreviousPageIcon'
import NextPageIcon from '../icons/NextPageIcon'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

function createArray(length, start) {
  return length ? Array.from(Array(Number(length)), (x, i) => start + i) : []
}

const Pagination = ({
  className: classNameProp,
  pages: pagesProp,
  pagesToDisplay: pagesToDisplayProp,
  currentPage,
  onPageChange,
}) => {
  const pages = Number(pagesProp)
  const pagesToDisplay = Number(pagesToDisplayProp) < pages ? Number(pagesToDisplayProp) : pages
  const startDisplayPages = createArray(pagesToDisplay, 1)

  // changes the number of page buttons that are displayed
  const [displayedPages, setDisplayedPages] = useState(startDisplayPages)

  const handleBackOnePage = () => {
    if (currentPage === 1) {
      onPageChange(1)
      setDisplayedPages(startDisplayPages)
    } else if (currentPage === displayedPages[0]) {
      const newDisplay = createArray(pagesToDisplay, currentPage - 1)
      onPageChange(currentPage - 1)
      setDisplayedPages(newDisplay)
    } else {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextOnePage = () => {
    if (currentPage === pages) {
      onPageChange(pages)
    } else if (currentPage === displayedPages[pagesToDisplay - 1]) {
      const newDisplay = createArray(pagesToDisplay, displayedPages[0] + 1)
      onPageChange(currentPage + 1)
      setDisplayedPages(newDisplay)
    } else {
      onPageChange(currentPage + 1)
    }
  }

  const handleEndPage = () => {
    const newDisplay = createArray(pagesToDisplay, pages - pagesToDisplay + 1)
    onPageChange(pages)
    setDisplayedPages(newDisplay)
  }

  return (
    <div className={classnames('zep-pagination', classNameProp)}>
      <IconButton
        onClick={() => {
          onPageChange(0)
          setDisplayedPages(startDisplayPages)
        }}
        disabled={currentPage === 1}
      >
        <PreviousPageIcon className="zep-button__icon" />
      </IconButton>
      <IconButton onClick={handleBackOnePage} disabled={currentPage === 1}>
        <ChevronLeftIcon className="zep-button__icon" />
      </IconButton>
      {displayedPages.map(elem => (
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
      <IconButton onClick={handleNextOnePage} disabled={currentPage === pages}>
        <ChevronRightIcon className="zep-button__icon" />
      </IconButton>
      <IconButton onClick={handleEndPage} disabled={currentPage === pages}>
        <NextPageIcon className="zep-button__icon" />
      </IconButton>
    </div>
  )
}

Pagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pagesToDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPageChange: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  pagesToDisplay: 5,
}

export default Pagination
