import { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '21:00', label: '9:00 PM' },
    { value: '22:00', label: '10:00 PM' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, numGuests, occasion });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setAvailableTimes([
      { value: '17:00', label: '5:00 PM' },
      { value: '18:00', label: '6:00 PM' },
      { value: '19:00', label: '7:00 PM' },
      { value: '20:00', label: '8:00 PM' },
      { value: '21:00', label: '9:00 PM' },
      { value: '22:00', label: '10:00 PM' },
    ]);
  };

  return (
    <form style={{ display: 'grid', maxWidth: 200, gap: 20 }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time) => (
          <option key={time.value} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder={1} min={1} max={10} id="guests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
}


export default BookingForm;
