import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Search from "./search";

const onChange = jest.fn()

describe('Search component', () => {
    it('Search comp renders', () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })
    it('Search comp renders without children', () => {
        render(
            <Search value="" onChange={onChange}/>
        )
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })
    it('Search comp renders without placeholder', () => {
        render(
            <Search value="" onChange={onChange}/>
        )
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
    })
    it('custom placeholder works correctly', () => {
        render(
            <Search value="" onChange={onChange} placeholder="find item"/>
        )
        expect(screen.getByPlaceholderText(/find item/i)).toBeInTheDocument()
    })
    it('onChange works', () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )
        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(onChange).toHaveBeenCalledTimes(5)
    })
    it('dynamic styles works', () => {
        render(<Search value='abc' onChange={onChange}/>)
        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('Search')).toHaveClass('label')

    })
    it('search snapshot', () => {
        const search = render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )
        expect(search).toMatchSnapshot()
    })
})