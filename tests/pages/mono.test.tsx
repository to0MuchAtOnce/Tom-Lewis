import React from "react";
import { render, screen } from "@testing-library/react";
import Mono from "@/pages/mono";

test("renders Mono omponent correctly", () => {
    render(<Mono />);
    const monoElement = screen.getByText('Mono')
    expect(monoElement).toBeInTheDocument;
})