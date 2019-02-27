import React from 'react'
import { render } from 'react-testing-library'
import DownloadCss from '../DownloadCss'

describe('DownloadCss', () => {
  it('renders correctly', () => {
    const component = render(<DownloadCss />)
    expect(component).toMatchSnapshot()
  })
})
