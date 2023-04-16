import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App"

describe('App component', () => {
    it('App renders', () => {
        render(<App/>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
    it('Typing in searchBox works', () => {
        render(<App/>)
        expect(screen.queryByDisplayValue(/React/)).toBeNull()
        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument()
    })
    it('search filter works', () => {
        render(<App/>)
        expect(screen.getByText(/html/i)).toBeInTheDocument()
        expect(screen.getByText(/Java Script/i)).toBeInTheDocument()
        expect(screen.getByText(/Type Script/i)).toBeInTheDocument()
        userEvent.type(screen.getByRole('textbox'), 'script')
        expect(screen.queryByText(/html/i)).toBeNull()
        expect(screen.getByText(/Java Script/i)).toBeInTheDocument()
    })
})