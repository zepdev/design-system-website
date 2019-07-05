import React from 'react'
import { render } from '@testing-library/react'
import IconButton from '../IconButton'
import CopyIcon from '../../icons/CopyIcon'

describe('IconButton', () => {
  it('renders correctly', () => {
    const mockProps = {
      onClick: jest.fn(() => {}),
      children: <CopyIcon className="test" />,
    }
    const component = render(<IconButton {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
