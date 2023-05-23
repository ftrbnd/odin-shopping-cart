import React from "react";
import { customRender } from "./test-utils";
import { screen } from "@testing-library/react";
import Cart from "../components/Cart";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

const mockCart = [
    {
        name: "Envoy",
        price: 189,
        image: "https://cdn.shopify.com/s/files/1/0279/3426/1330/files/envoy-walnut_1760x.jpg?v=1677869985",
        id: 0,
        quantity: 2
    },
    {
        name: "Sonnet",
        price: 349,
        image: "https://cdn.shopify.com/s/files/1/0279/3426/1330/collections/accent-3_1100x.webp?v=1651218957",
        id: 1,
        quantity: 2
    },
    {
        name: "Eighty",
        price: 399,
        image: "https://cdn.shopify.com/s/files/1/0279/3426/1330/collections/configs_wht_gry_9-16_1_1100x.jpg?v=1637257372",
        id: 2,
        quantity: 1
    }
];

describe("Cart component", () => {

    it("renders correctly with empty cart", () => {
        const providerProps = {
            value: [[]]
        };

        customRender(<Cart />, { providerProps });
        
        expect(screen.getByRole('heading').textContent).toMatch(/cart is empty/i);
    });

    it("renders correctly with populated cart", () => {
        const providerProps = {
            value: [mockCart]
        };
        customRender(<Cart />, { providerProps });

        expect(screen.getAllByAltText(/keyboard/).length).toBe(3);
    });

    it("removes item from cart and updates price accordingly", async () => {        
        const providerProps = {
            value: [mockCart]
        };
        const user = userEvent.setup();

        customRender(<Cart />, { providerProps });
        await user.click(screen.getAllByRole('button', {
            name: "Remove"
        })[0]);

        expect(screen.getAllByAltText(/keyboard/i).length).toBe(2);
    });
});