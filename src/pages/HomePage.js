import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { Sidebar } from '../component/Sidebar'
import {useStyles} from '../style/CommonCSS'
import MainPanel from '../component/MainPanel'
import { createTheme } from '@mui/material/styles';

export const HomePage = () => {
    const classes = useStyles();
    // const theme = useTheme();
    const theme = createTheme({
      breakpoints: {
          values: {
              md: 1080, 
          },
      },
  });
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div >
        <Grid container className={classes.mainContainer}>
        {matches && (
                    <Grid className={classes.sideContainer}>
                        <Sidebar />
                    </Grid>
                )}
          <Grid className={classes.mainPanel}>
            <MainPanel/>
          </Grid>       
      </Grid>
    </div>
  )
}
