import React from "react";
import { render } from "@testing-library/react";
import App from "components/App";

test("renders Hello world link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
