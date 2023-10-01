import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { Button, InputGroup, Form } from 'react-bootstrap';

import './RegistrationForm.css';
import Navbars from './00 - Navbar/Navbar';
import Footer from './12 - Footer/Footer';

function RegistrationForm() {

  const [selectedGender, setSelectedGender] = useState('Male');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryRestrictions: [],
    goals: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedDietaryRestrictions = checked
        ? [...formData.dietaryRestrictions, name]
        : formData.dietaryRestrictions.filter((item) => item !== name);
      setFormData({
        ...formData,
        dietaryRestrictions: updatedDietaryRestrictions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Details updated successfully!',
    });
    localStorage.setItem('userFormData', JSON.stringify(formData));
  };

  return (
    <div className='outer'>
      <Navbars />
      <div className="registrationForm">
        <div className="content">

          <h2>User Registration</h2>
          <h3>First Name</h3>
          <input type='text' value={formData.firstName} onChange={handleInputChange} required />
          <h3>Last Name</h3>
          <input type='text' value={formData.lastName} onChange={handleInputChange} required />
          <h3>Age </h3>
          <input type='number' value={formData.age} onChange={handleInputChange} required />
          <h3>Gender</h3>
          <Form.Group>
            <div>
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="Male"
                checked={selectedGender === 'Male'}
                onChange={handleGenderChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                checked={selectedGender === 'Female'}
                onChange={handleGenderChange}
              />
            </div>
          </Form.Group>
          <p>Selected Gender: {selectedGender}</p>

          <h3>Weight (in Kg) </h3>
          <input type='number' value={formData.weight} onChange={handleInputChange} required />

          <h3>Height (in cm) </h3>
          <input type='number' value={formData.height} onChange={handleInputChange} required />
          <br />
          <button className='btn btn-outline-success' onClick={handleSubmit}>Save Details</button>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegistrationForm;
