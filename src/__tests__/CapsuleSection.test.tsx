import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CapsuleSection from "../components/sectionsUI/CapsulesSection";

test("renders 'No data' message when there is no data", () => {
  render(<CapsuleSection />);

  const noDataMessage = screen.getByText(/There is no data in our database/i);
  expect(noDataMessage).toBeInTheDocument();
});
