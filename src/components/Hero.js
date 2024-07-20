import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="bg-white h-screen flex items-center pt-16">
      <Container className="text-center">
        <Typography variant="h2" className="font-bold mb-4">
          Hi, I'm Pavankumar
        </Typography>
        <Typography variant="h5" className="mb-8">
          A Full Stack Developer with a passion for building web applications
        </Typography>
        <Link to="about" smooth={true} offset={-70} duration={500}>
        <Button variant="contained" style={{ backgroundColor: 'rgb(92 103 175)' }} color="primary">
          View My Work
        </Button>
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
