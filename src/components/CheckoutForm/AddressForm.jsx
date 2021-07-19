/* eslint-disable no-unused-vars */
import React from 'react';
import {
  InputLabel, Select, MenuItem, Button, Grid, Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>Hello</Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
