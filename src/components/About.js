import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <Container className="text-center">
        <Typography variant="h4" className="font-bold mb-4">About Me</Typography>
        <Paper className="p-8 shadow-md rounded-lg mx-auto max-w-3xl">
          <Typography variant="body1">
            My name is Pavankumar. I have around 4 years of experience as a full stack developer and currently work at CarTrade Tech in the Used Cars team. I handle multiple projects including CarTradeExchange.com, Admin.CarTradeExchange.com, and Payments.CarTradeExchange.com using various technologies.
          </Typography>
        </Paper>
      </Container>
    </section>
  );
};

export default About;
