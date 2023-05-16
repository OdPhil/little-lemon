import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingForm';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the Choose date label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
})

test('initializeTimes returns expected value', () => {
  const expected = [
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "21:00", label: "9:00 PM" },
    { value: "22:00", label: "10:00 PM" }
  ];
  const result = initializeTimes();
  expect(result).toEqual(expected);
});

test('updateTimes returns the same value that is provided in the state', () => {
  const state = [
    { value: "17:00", label: "5:00 PM" },
    { value: "18:00", label: "6:00 PM" },
    { value: "19:00", label: "7:00 PM" },
    { value: "20:00", label: "8:00 PM" },
    { value: "21:00", label: "9:00 PM" },
    { value: "22:00", label: "10:00 PM" }
  ];
  const date = new Date();
  const result = updateTimes(state, date);
  expect(result).toEqual(state);
});
