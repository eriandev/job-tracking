import { describe, expect, it } from 'vitest'
import { render, userEvent } from 'test/utils.js'
import App from '@/App.jsx'

describe('Simple working test', () => {
  it('should title be visible', () => {
    const { getByText } = render(<App />)
    expect(getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })

  it('should increment count on click', async () => {
    const { getByRole, findByText } = render(<App />)
    userEvent.click(getByRole('button'))
    expect(await findByText(/count is: 1/i)).toBeInTheDocument()
  })
})
