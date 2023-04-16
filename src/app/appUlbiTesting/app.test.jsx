import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('Test App', () => {
    test("renders learn react link", () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/hello world!/i);
        const buttonElement = screen.getByRole('button');
        const inputElement = screen.getByPlaceholderText(/placeholder/i);
        expect(helloWorldElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(inputElement).toMatchSnapshot();
    });
    test("find element with async side-effect component", async () => {
        render(<App />);
        // const helloWorldElement = screen.queryByText(/hello world2/i);
        // expect(helloWorldElement).toBeNull();
        screen.debug()
        const helloWorldElement = await screen.findByText(/somedata/i)
        expect(helloWorldElement).toBeInTheDocument()
        expect(helloWorldElement).toHaveStyle({color: "red"})
        screen.debug()
    });
    test("click event", () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.getByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    })
    test("use input", () => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/placeholder/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('')
        // fireEvent.input(inputElement, {
        //     target: {value: '123123'}
        // })
        userEvent.type(inputElement, '123123')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
    })
})

