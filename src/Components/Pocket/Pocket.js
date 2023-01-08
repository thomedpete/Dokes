import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Whoopsie from '../Whoopsie/Whoopsie'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const label = { inputProps: { 'aria-label': 'Favorite button to put in pocket/saved jokes' } }


const Pocket = ({ pocket, deleteJoke }) => {

  // const deleteJoke = () => {
  //   console.log('DELETE')
  // }

  // add some kind of 'hey, no jokes! add some' prompt when fresh/empty

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {!pocket.length && <Whoopsie />}
          <Grid className="grid" container spacing={4}>
            {pocket.map((joke) => (
              <Grid item key={joke.id} xs={12} sm={6} md={4}>
                 <Card sx={{ maxWidth: '60%', backgroundColor: "#9966CC" }}>
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <CardContent sx={(theme) => ({
                        bgcolor: '#9966CC',
                        border: 3,
                        borderColor: 'white'
                      })}>
                      <Card sx={(theme) => ({
                        bgcolor: '#FFCB5F',
                        border: 3,
                        borderColor: 'black'
                      })}>
                        <Typography p='5%' m="2.55%" gutterBottom  color="black"
                          sx={(theme) => ({
                            [theme.breakpoints.down('sm')]: {
                              fontSize:'medium',
                              fontWeight: 'bold',
                              marginTop:'4%'
                            },
                            [theme.breakpoints.down('md')]: {
                              fontSize: 'medium',
                              fontWeight: 'bold',
                              marginTop: '2%'
                            },
                          })}
                        >

                          {joke.joke}
                        </Typography>
                        <Button variant="contained" color="success" onClick={() => deleteJoke(joke)}>
                          Delete
                        </Button>
                      </Card>
                    </CardContent>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Pocket