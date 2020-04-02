import React from 'react'
import Search from '@zlab-de/zel-react/Search'

function SearchExample() {
  const handleChange = selection => {
    alert(`You selected ${selection.value}`)
  }
  const searchItems = [
    { value: 'value 1' },
    { value: 'value 2' },
    { value: 'value 3' },
  ]

  return (
    <div>
      <Search
        onChange={handleChange}
        items={searchItems}
        placeholder="Search for value"
      />

      <Search
        onChange={handleChange}
        items={searchItems}
        variant="header"
        placeholder="Search for value"
      />
    </div>
  )
}

export default SearchExample
