// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const paymentMethods = [
  ['cash', 'Cash'],
  ['card', 'Card'],
] as const;
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

export const environment = {
  host: '/',
  // host: 'https://10.0.2.2:8084/',
  production: false,
  paymentMethodsMap: new Map<any, string>(paymentMethods),
  bookingStepsMap: new Map<any, string>(bookingSteps),
  bookingStepExprsMap: new Map<any, string>(bookingStepExprs),
  sortOrdersMap: new Map<any, string>(sortOrders),
  sortFieldsMap: new Map<any, string>(sortFields),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
