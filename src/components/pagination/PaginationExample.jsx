import React, { useState } from 'react'
import Pagination from '@zlab-de/zel-react/Pagination'

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <div>
      <p style={{ padding: 30, border: '1px solid gray' }}>This is Page {currentPage}</p>
      <div style={{ textAlign: 'right' }}>
        <Pagination
          pages={15}
          pagesToDisplay={5}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default PaginationExample
