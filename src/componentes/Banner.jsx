import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BannerImage from '../assets/banner-background.jpg'; // Substitua pelo caminho da sua imagem

const Banner = () => {
  return (
    <Grid container justifyContent="center" sx={{ backgroundColor: '#181818', padding: '40px 0', position: 'relative' }}>
      <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#7CFC00', marginBottom: '20px' }}>
          Front-End: Construindo interfaces web com simplicidade, elegância e funcionalidade.
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
          Crie sites incríveis que combinem design moderno, usabilidade impecável e código eficiente. 
        </Typography>
      </Grid>
      <img src={BannerImage} alt="Banner" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} /> {/* Imagem de fundo */}
    </Grid>
  );
};

export default Banner;