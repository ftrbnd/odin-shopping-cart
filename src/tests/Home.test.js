import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import '@testing-library/jest-dom'


describe("Home page", () => {
    it("renders correct heading", () => {
        render(<Home />);

        expect(screen.getAllByRole('heading')[0].textContent).toMatch(/the envoy/i);
    });

    it("loads image", () => {
        render(<Home />);

        expect(screen.getByRole('img')).toBeInTheDocument();
    })
});