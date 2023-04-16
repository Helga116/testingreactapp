import { render, screen } from "@testing-library/react";
import Users from "./users";
import {jest} from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
    execSync: jest.fn(),
    // etc.
}));

const {execSync} = await import('axios');

jest.mock('axios')
const axios = require('axios')
describe('Test Users', () => {
    let response
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham",
                },
                {
                    id: 2,
                    name: "Ervin Howell",

                },
                {
                    id: 3,
                    name: "Clementine Bauch",

                },
                {
                    id: 4,
                    name: "Patricia Lebsack",

                },
                {
                    id: 5,
                    name: "Chelsey Dietrich",

                },
            ]
        }
    })
    test("renders learn react link", async () => {
        axios.get.mockReturnValue(response)
        render(<Users />);
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(5)
        expect(axios.get).toBeCalledTimes(1)
        screen.debug()
    });

})