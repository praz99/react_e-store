import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Button, Card, CardActions, CardContent, CardMedia,
} from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">
          {item.name}
        </Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    media: PropTypes.shape({
      source: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    line_total: PropTypes.shape({
      formatted_with_symbol: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onUpdateCartQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};
