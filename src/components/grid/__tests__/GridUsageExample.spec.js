import React from 'react'
import { render } from '../../../../test-utils'
import GridUsageExample from '../GridUsageExample'

describe('GridUsageExample', () => {
  it('renders correctly', () => {
    const mockProps = {
      rows: [
        {
          cols: [
            {
              xxs: 3,
              xs: 3,
              m: 2,
              l: 3,
              text: 'xxs=1 xs=3 m=2 l=3',
            },
            {
              xxs: 3,
              xs: 3,
              m: 2,
              l: 3,
              text: 'xxs=1 xs=3 m=2 l=3',
            },
            {
              xxs: 4,
              m: 4,
              l: 6,
              text: 'xxs=4 m=4 l=6',
            },
          ],
        },
      ],
    }
    const component = render(<GridUsageExample {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
