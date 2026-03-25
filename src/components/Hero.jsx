import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        pt: 8,
        pb: 6,
        mb: 4,
        textAlign: 'center',
        backgroundImage: 'linear-gradient(45deg, #fff176 30%, #f48fb1 90%)',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Egg-stra Special Easter
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Celebrate with our handcrafted chocolate eggs and delicious treats. 
          The perfect gifts for your loved ones this spring!
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={scrollToProducts}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
