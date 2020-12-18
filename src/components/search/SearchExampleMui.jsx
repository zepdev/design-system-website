import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Autocomplete from '@material-ui/core/Autocomplete'
import ZepIconEssentialSearch from '@zlab-de/zel-react-icons/ZepIconEssentialSearch'

function SearchExampleMui() {
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
      <Autocomplete
        onChange={(event, newValue) => {
          handleChange(newValue)
        }}
        forcePopupIcon={false}
        id="-example"
        style={{ width: 300 }}
        options={searchItems}
        getOptionLabel={option => option.value}
        renderInput={params => (
          <div ref={params.InputProps.ref}>
            <OutlinedInput
              {...params.inputProps}
              variant="outlined"
              abel="Search box"
              style={{ borderRadius: 0 }}
              endAdornment={
                <InputAdornment position="end">
                  <ZepIconEssentialSearch />
                </InputAdornment>
              }
            />
          </div>
        )}
      />
    </div>
  )
}

export default SearchExampleMui
