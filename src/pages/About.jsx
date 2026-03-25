import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" color="text.secondary" paragraph align="center">
          Spreading joy one chocolate egg at a time since 2023.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1">
                We strive to bring the most delightful Easter experiences to families everywhere.
                Our products are selected for their quality, craftsmanship, and the smiles they bring.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Our Quality
              </Typography>
              <Typography variant="body1">
                From premium Belgian chocolate to hand-stitched plushies, we ensure every item in
                our shop meets the highest standards of excellence.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
