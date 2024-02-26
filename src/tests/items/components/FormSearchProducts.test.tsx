import { render, screen } from "@testing-library/react"
import {
	AppRouterContext,
	type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'

import FormSearchProducts from "../../../app/items/components/FormSearchProducts"
import { useRouter } from "next/navigation"

jest.mock('next/navigation', () => {
  const mocked = {
    useRouter: jest.fn(() => ({
      push: jest.fn()
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(() => 'query')
    }))
  }
  return mocked
})


describe('Test in <FomrSearchProduct/>', () => { 
  
  test('should render the input with the value and push when the button is clicked', () => { 
    const mockReturn = (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn()
    })
    const { getByPlaceholderText } = render(
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <FormSearchProducts />
      </AppRouterContext.Provider>
    )
    const button = screen.getByRole('button')
    const input = getByPlaceholderText('Nunca dejes de buscar')
    expect(input.getAttribute('value')).toBe('query')
    button.click()
    const push = mockReturn.mock.results[0].value.push 
    expect(push).toHaveBeenCalledTimes(1)
  })

  
})