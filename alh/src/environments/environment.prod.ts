import {
  BookingStepExprs, bookingStepExprs, bookingSteps, BookingSteps,
  PaymentMethods, paymentMethods, sortFields,
  SortFields, sortOrders, SortOrders,
} from 'src/app/interface';

export const environment = {
  host: 'https://localhost:8084/',
  production: true,
  paymentMethodsMap: new Map<PaymentMethods, string>(paymentMethods),
  bookingStepsMap: new Map<BookingSteps, string>(bookingSteps),
  bookingStepExprsMap: new Map<BookingStepExprs, string>(bookingStepExprs),
  sortOrdersMap: new Map<SortOrders, string>(sortOrders),
  sortFieldsMap: new Map<SortFields, string>(sortFields),
};
