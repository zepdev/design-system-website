import React from 'react'
import { render } from '../../../../test-utils'
import DownloadContainer from '../DownloadContainer'

describe('DownloadContainer', () => {
  it('renders correctly', () => {
    const mockProps = {
      children: [],
    }
    const component = render(<DownloadContainer {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
