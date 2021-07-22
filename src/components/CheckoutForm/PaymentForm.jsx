/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CartElement, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const PaymentForm = ({ checkoutToken }) => (
  <>
    <Review checkoutToken={checkoutToken} />
  </>
);

export default PaymentForm;
