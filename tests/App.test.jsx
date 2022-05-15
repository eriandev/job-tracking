import { describe, expect, it } from 'vitest'
import { render } from 'test/utils.js'
import App from '@/App.jsx'

describe('App component', () => {
  it('should be created', () => {
    const component = render(<App />)
    expect(component).toBeTruthy()
  })
})
