/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PropTypes } from 'prop-types';
import Review from './Review';

const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, backStep }) => (
  <>
    <Review checkoutToken={checkoutToken} />
    <Divider />
    <Typography vairant="h6" gutterBottom style={{ margin: '20px' }}>Payment method</Typography>
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <form>
            <CardElement />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!stripe}
              >
                Pay
                {' '}
                {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
      </ElementsConsumer>
    </Elements>
  </>
);

export default PaymentForm;

PaymentForm.propTypes = {
  checkoutToken: PropTypes.shape({
    live: PropTypes.shape({
      line_items: PropTypes.arrayOf(PropTypes.object),
      subtotal: PropTypes.shape({
        formatted_with_symbol: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
  backStep: PropTypes.func.isRequired,
};
