import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// ControlledOpenSelect
export default function SplitButton() {

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        {/*#contained-buttons*/}
        <Button variant="contained" color="primary" href="/" alignItems="center" >Home</Button>
        <Button variant="contained" color="primary" href="LadiesProducts" alignItems="center" >Ladies Shoes</Button>
        <Button variant="contained" color="primary" href="MensProducts" alignItems="center" >Mens Shoes</Button>
        <Button variant="contained" color="primary" href="KidsProducts" alignItems="center" >Kids Shoes</Button>
        <Button variant="contained" color="primary" href="about" alignItems="center" >About Me</Button>
      </Grid>
    </Grid>
  );
}