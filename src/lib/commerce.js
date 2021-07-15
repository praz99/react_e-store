import Commerce from '@chec/commerce.js';

// eslint-disable-next-line import/prefer-default-export
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
