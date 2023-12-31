import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    textbox1: "",
    textbox2: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/formData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");
      } else {
        console.error("Failed to submit form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="textbox1">Textbox 1:</label>
        <input
          type="text"
          id="textbox1"
          name="textbox1"
          value={formData.textbox1}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="textbox2">Textbox 2:</label>
        <input
          type="text"
          id="textbox2"
          name="textbox2"
          value={formData.textbox2}
          onChange={handleInputChange}
          required
        />
      </form>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MyForm;
