import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            fullWidth
            label={label}
            required
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
