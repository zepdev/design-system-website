import React from 'react'
import { render } from '../../../../test-utils'
import CodeUsage from '../CodeUsage'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMdx: {
        edges: {
          node: {
            frontmatter: {
              title: 'Mock Title',
              label: 'Mock Label',
            },
            code: {
              body: 'Mock Code',
            },
          },
          find: jest.fn(),
        },
      },
    })
  )
})

describe('CodeUsage', () => {
  it('renders correctly', () => {
    const mockProps = {
      element: 'button',
    }
    const component = render(<CodeUsage {...mockProps} />)
    expect(component).toMatchSnapshot()
  })
})
