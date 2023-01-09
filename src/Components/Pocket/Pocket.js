import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Whoopsie from '../Whoopsie/Whoopsie'
import { gsap, Power3 } from 'gsap'
import './Pocket.css'


const theme = createTheme();

const Pocket = ({ pocket, deleteJoke }) => {
  let pocketBox = useRef(null)
  let tl = useRef(null)

  const pocketGSAP = () => {
    tl = gsap.timeline({ repeat: 0 })
    tl.to(pocketBox, 1, { opacity: 1, x: 50, ease: Power3.easeIn })
  }

  useEffect(() => {
    pocketGSAP()
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 4, px: 0, display: 'flex', flexDirection: 'column', paddingRight:7}} maxWidth="100%" >
          {!pocket.length && <Whoopsie />}
          <Grid className="grid" container spacing={4} ref={el => { pocketBox = el }}>
            {pocket.map((joke) => (
              <Grid item key={joke.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: '90%', backgroundColor: "#9966CC" }}>
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
                        <Typography p='5%' gutterBottom color="black"
                          sx={(theme) => ({
                            [theme.breakpoints.down('sm')]: {
                              fontSize: 'medium',
                              fontWeight: 'bold',
                              marginTop: '4%'
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
    </ThemeProvider>
  );
}

export default Pocket
Pocket.propTypes = {
  pocket: PropTypes.array,
  deleteJoke: PropTypes.func
}