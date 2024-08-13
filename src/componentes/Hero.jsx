import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Hero = () => {
  return (
    <Grid container justifyContent="center" sx={{ padding: '40px 0', backgroundColor: '#181818' }}>
      <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: '#7CFC00', marginBottom: '20px' }}>
          Dê vida aos seus projetos com a CodeCraft.
        </Typography>
        <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
          Trabalhamos com paixão e expertise para criar interfaces web que inspiram e convertem.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;