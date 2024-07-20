import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        
        <Grid container spacing={4} className="mt-10">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="shadow-lg h-full">
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="150"
                  image={require(`../assets/${project.image}`)}
                  title={project.title}
                  className="object-cover"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="h6" gutterBottom className="mt-4">
                    Technology Stack
                  </Typography>
                  <Typography variant="body2">
                    <strong>Front End:</strong> {project.technologyStack.frontEnd}<br />
                    <strong>Back End:</strong> {project.technologyStack.backEnd}<br />
                    <strong>Database:</strong> {project.technologyStack.database}
                  </Typography>
                  {project.technologyStack.paymentGateways && (
                    <Typography variant="body2">
                      <strong>Payment Gateways:</strong> {project.technologyStack.paymentGateways}
                    </Typography>
                  )}
                  <Typography variant="h6" gutterBottom className="mt-4">
                    Development Process
                  </Typography>
                  <ul className="list-disc pl-5 text-sm">
                    {project.developmentProcess.map((process, i) => (
                      <li key={i}>{process}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
