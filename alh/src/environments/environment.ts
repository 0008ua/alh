// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BookingStepExprs, bookingStepExprs, bookingSteps, BookingSteps,
  PaymentMethods, paymentMethods, sortFields,
  SortFields, sortOrders, SortOrders } from 'src/app/interface';

export const environment = {
  host: '/',
  // host: 'https://10.0.2.2:8084/',
  production: false,
  paymentMethodsMap: new Map<PaymentMethods, string>(paymentMethods),
  bookingStepsMap: new Map<BookingSteps, string>(bookingSteps),
  bookingStepExprsMap: new Map<BookingStepExprs, string>(bookingStepExprs),
  sortOrdersMap: new Map<SortOrders, string>(sortOrders),
  sortFieldsMap: new Map<SortFields, string>(sortFields),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
