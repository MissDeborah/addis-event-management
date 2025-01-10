import React, { useState } from "react";
import "./Event.css"; // Import the custom CSS
import Header from "./Header";
import Footer from "./Footer";

const Event = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: save event data locally
    const eventData = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      description: eventDescription,
    };

    console.log("Event Submitted:", eventData);
    setSuccessMessage("Event added successfully!");

    // Clear form fields after submission
    setEventName("");
    setEventDate("");
    setEventLocation("");
    setEventDescription("");

    // In real projects, send the eventData to a backend API here.
  };

  return (
    <div>
      <Header />
      <div className="add-event-container">
        <h1 className="add-event-title">Add New Event</h1>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="add-event-form">
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter event name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              placeholder="Enter event location"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Add Event
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
