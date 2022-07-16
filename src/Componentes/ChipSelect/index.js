import * as React from 'react';
import { Chip, Stack, Grid } from '@mui/material';


function ChipSelect() {
    return (
        <Stack direction="row" spacing={1} 
        alignContent= "center" 
        justifyContent= "center"
        alignItems="flex-start" >
          <Grid item xs={5} >
            <Chip label="Frontend Developer" />
            <p> HTML</p>
            <p> JavaScript</p>
            <p> Typescript</p>
            <p> Next Js</p>
            <p> CSS</p>
            <p> Material UI</p>
          </Grid>
          <Grid item xs={5}>
            <Chip label="Backend Developer"  />
            <p> Node Js</p>
            <p> PostgreSQL</p>
            <p> Express</p>
            <p> Redux</p>
            <p> React</p>
            <p> Sequelize</p>
          </Grid>
          
        </Stack>
  );
};

export default ChipSelect;

