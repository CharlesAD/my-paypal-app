import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("calls the newBalance function whenever the button is clicked", () => {
  const mockSend = jest.fn();

  render(<App newBalance={mockSend} />);

  userEvent.click(screen.getByRole("button"));

  expect(mockSend).toHaveBeenCalled();
});

it("displays 'You do not have enough funds' when transfer value is greater than balance ", () => {
  render(<App />);

  const enteredValue = screen.getByLabelText(/transfer/i);

  const sendBtn = screen.getByRole("button", { name: /send/i });

  userEvent.click(sendBtn);

  const displayMessage = screen.getByLabelText(/feedback/i);

  expect(displayMessage).toBe("You do not have enough funds");
});
