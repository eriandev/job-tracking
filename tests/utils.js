/* eslint-disable import/export */
/* eslint-disable no-unused-vars */
import { afterEach } from 'vitest'
import { ReactElement } from 'react'
import { cleanup, render } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

/**
 * @param { ReactElement } ui
 */
const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
