import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t border-gray-300">
      <Container className="text-center">
        <Typography variant="body1" className="mb-4">
          &copy; 2024 My Portfolio. All rights reserved.
        </Typography>
        <div className="flex justify-center space-x-4">
          <Button color="inherit" href="https://github.com" target="_blank">GitHub</Button>
          <Button color="inherit" href="https://www.linkedin.com/in/pavankumar-doddi-3b1988b5" target="_blank">LinkedIn</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
