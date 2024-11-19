import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password } = formData;

        if (username === "" || email === "" || password === "") {
          alert("All fields are required!!!");
        } else {
          console.log("Form submitted:", formData);
          alert("Registration successful!");
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <button type='submit'>Submit</button>
    </form>
  );
}

export default RegistrationForm
