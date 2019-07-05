import React from 'react'
import { render } from '@testing-library/react'
import DownloadIcon from '../DownloadIcon'

describe('CopyIcon', () => {
  it('renders correctly', () => {
    const component = render(<DownloadIcon />)
    expect(component).toMatchSnapshot()
  })
})
