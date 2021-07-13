/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardMedia, CardContent, CardAction, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const classes = {
  root: 'root',
  media: 'media',
  cardContent: 'cardContent',
};

function Product({ product }) {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;
