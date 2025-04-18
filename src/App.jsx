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

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
  <div>
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  </div>
  );
}

export default App;
