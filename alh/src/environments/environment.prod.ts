

export const bookingSteps = [
  [null, 'All'],
  ['preorder', 'Preorder'],
  ['reserved', 'Reserved'],
  ['paid', 'Paid'],
  ['cancelled', 'Cancelled'],
] as const;
export const bookingStepExprs = [
  ['$eq', 'Equal'],
  ['$ne', 'Not Equal'],
] as const;

export const sortOrders = [
  [1, 'Ascending'],
  [-1, 'Descending'],
] as const;

export const sortFields = [
  ['bookingStep', 'Booking Step'],
  ['dates.from', 'Date from'],
  ['dates.to', 'Date to'],
  ['price', 'Price'],
] as const;
export const paymentMethods = [
  ['cash', 'Cash'],
  ['card', 'Card'],
] as const;
export const environment = {
  host: '/',
  production: true,
  paymentMethodsMap: new Map<any, string>(paymentMethods),
  bookingStepsMap: new Map<any, string>(bookingSteps),
  bookingStepExprsMap: new Map<any, string>(bookingStepExprs),
  sortOrdersMap: new Map<any, string>(sortOrders),
  sortFieldsMap: new Map<any, string>(sortFields),
};
