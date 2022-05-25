import { render, screen, waitFor } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    waitFor(() => expect(screen.getAllByRole('heading')).toBeInTheDocument())

    expect(container.firstChild).toMatchSnapshot()

    expect(container.firstChild).toHaveStyle({
      'background-image': 'linear-gradient(to top, #c33764 0%, #1d2671 80%)'
    })
  })
})
