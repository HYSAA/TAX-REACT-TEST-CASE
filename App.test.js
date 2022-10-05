import { render, screen, fireEvent } from "@testing-library/react";

import NetPay from './NetPay';

describe("This is a Net pay calculation app. Checking UI components.", ()=>{
	// check if Income textfield exists
	it("has an input field for Income", () => {
		render(<NetPay />);
		const input = screen.getByTestId("income");
		expect(input).toBeInTheDocument();
	    expect(input).toHaveAttribute("type", "text");
	});

	// check if Tax textfield exists
	it("has an input field for Tax", () => {
		render(<NetPay />);
		const input = screen.getByTestId("tax");
		expect(input).toBeInTheDocument();
	    expect(input).toHaveAttribute("type", "text");
	});

	// Check if Button exists
	it("has a button to get net income.", () => {
		render(<NetPay />);
		const btn = screen.getByTestId("btn-get-income-tax");
		expect(btn).toBeInTheDocument();
	});
});

describe("Check for result.", ()=>{
	it("it has value for income, tax and result.", () => {
		render(<NetPay/>);
		const input = screen.getByTestId("income");
		fireEvent.change(input, { target: { value: "100" }});
		expect(input.value).toBe("100");

		const input2 = screen.getByTestId("tax");
		fireEvent.change(input2, { target: { value: "50" }});
		expect(input2.value).toBe("50");

		const btn = screen.getByTestId("btn-get-income-tax");
		fireEvent.click(btn);
		expect(screen.getByTestId("netpay-result")).toHaveTextContent("50");
	});
});