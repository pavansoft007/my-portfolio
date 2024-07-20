import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/skills.json')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} className="mt-10">
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="shadow-lg">
                <CardContent className="flex flex-col items-center">
                  <Typography variant="h5" gutterBottom>
                    {skill.name}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: 'rgb(92, 103, 175)',
                      color: '#fff',
                      borderRadius: '28px',
                      textTransform: 'none',
                    }}
                    className="hover:bg-gray-700"
                  >
                    {skill.level}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Skills;
