import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, email, message };
    console.log(formData)
    setSubmitted(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.error('Error submitting form');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="mt-10">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={handleChangeName}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            margin="normal"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={message}
            onChange={handleChangeMessage}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
            style={{ backgroundColor: 'rgb(92, 103, 175)' }}
          >
            Submit
          </Button>
        </Box>
        {submitted && (
          <Typography variant="h6" align="center" color="green" className="mt-4">
            Thank you for contacting us!
          </Typography>
        )}
      </Container>
    </section>
  );
};

export default ContactUs;
