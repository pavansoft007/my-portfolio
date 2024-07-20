import React from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" className="bg-gradient-to-r from-[#d156d5] via-[#8171dd] to-[#6eaae0] py-2">
      <Toolbar>
        <Container>
          <div className="flex justify-between items-center w-full">
            {/* Portfolio Title */}
            <Typography variant="h6" className="text-white font-bold">
              My Portfolio
            </Typography>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <Link to="about" smooth={true} offset={-70} duration={500}>
                <Button 
                  variant="contained" 
                  style={{ 
                    backgroundColor: 'rgb(92 103 175)', // Light grey background
                    color: '#fff', // Black text
                    borderRadius: '28px',
                    textTransform: 'none',
                  }} 
                  className="hover:bg-gray-300"
                >
                  About
                </Button>
              </Link>
              <Link to="projects" smooth={true} offset={-70} duration={500}>
                <Button 
                  variant="contained" 
                  style={{ 
                    backgroundColor: 'rgb(92 103 175)', // Light grey background
                    color: '#fff', // Black text
                    borderRadius: '28px',
                    textTransform: 'none',
                  }} 
                  className="hover:bg-gray-300"
                >
                  Projects
                </Button>
              </Link>
              <Link to="skills" smooth={true} offset={-70} duration={500}>
                <Button 
                  variant="contained" 
                  style={{ 
                    backgroundColor: 'rgb(92 103 175)', // Light grey background
                    color: '#fff', // Black text
                    borderRadius: '28px',
                    textTransform: 'none',
                  }} 
                  className="hover:bg-gray-300"
                >
                  Skills
                </Button>
              </Link>
              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <Button 
                  variant="contained" 
                  style={{ 
                    backgroundColor: 'rgb(92 103 175)', // Light grey background
                    color: '#fff', // Black text
                    borderRadius: '28px',
                    textTransform: 'none',
                  }} 
                  className="hover:bg-gray-300"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
