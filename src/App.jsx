import { useState } from 'react'
import './App.css'
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { NewsCard } from './components/MyCard';

function App() {
  return (
    <div>
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NewsCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NewsCard />
        </Grid>
      </Grid>
    </div>
    </div>
    
  );
}

export default App;
