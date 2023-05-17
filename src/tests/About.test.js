import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About page", () => {
    it("renders correct headings", () => {
        render(<About />);
        const headings = screen.getAllByRole('heading');

        expect(headings[0].textContent).toMatch(/about us/i);
        expect(headings[1].textContent).toMatch(/order changes/i);
        expect(headings[2].textContent).toMatch(/shipping address update/i);
        expect(headings[3].textContent).toMatch(/order cancellation/i);
    });

});