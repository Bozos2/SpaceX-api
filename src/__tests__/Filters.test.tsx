import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/UI/Filters";

test("renders Filters component with initial state", () => {
  // Mocking the onFilterChange function
  const mockOnFilterChange = jest.fn();

  render(<Filters onFilterChange={mockOnFilterChange} />);

  // Check if the component renders with the initial state
  expect(screen.getByLabelText("Status")).toHaveValue("");
  expect(screen.getByLabelText("Original Launch")).toHaveValue("");
  expect(screen.getByLabelText("Type")).toHaveValue("");
});

test("updates Filters component state on input change", () => {
  // Mocking the onFilterChange function
  const mockOnFilterChange = jest.fn();

  render(<Filters onFilterChange={mockOnFilterChange} />);

  // Simulate changes in the input fields
  fireEvent.change(screen.getByLabelText("Status"), {
    target: { value: "active" },
  });
  fireEvent.change(screen.getByLabelText("Original Launch"), {
    target: { value: "2022-01-01" },
  });
  fireEvent.change(screen.getByLabelText("Type"), {
    target: { value: "Dragon 1.0" },
  });

  // Check if the state is updated correctly
  expect(screen.getByLabelText("Status")).toHaveValue("active");
  expect(screen.getByLabelText("Original Launch")).toHaveValue("2022-01-01");
  expect(screen.getByLabelText("Type")).toHaveValue("Dragon 1.0");
});
