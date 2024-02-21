// components/Form.tsx
import React from "react";

function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.currentTarget); // Get form data

    try {
      const response = await fetch('http://localhost:4000/contactUs', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>Enter your name:</label> <br />
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="text-black"
      />
      <br />
      <label>Enter your email:</label> <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="text-black"
      />{" "}
      <br />
      <label>Enter your phoneNo:</label> <br />
      <input
        type="number"
        name="phoneNo"
        placeholder="phoneNo"
        required
        className="text-black"
      />{" "}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
