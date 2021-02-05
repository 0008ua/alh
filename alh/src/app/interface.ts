import { Type } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { environment } from 'src/environments/environment';

export const paymentMethods = ['cash', 'card'] as const;
export type PaymentMethods = typeof paymentMethods[number];

// export const bookingSteps = [
//   [null, 'All'],
//   ['preorder', 'Preorder'],
//   ['reserved', 'Reserved'],
//   ['paid', 'Paid'],
//   ['cancelled', 'Cancelled'],
// ] as const;
// export type BookingSteps = typeof bookingSteps[number][0];

export const bookingSteps = [null, 'preorder', 'reserved', 'paid', 'cancelled'] as const;
export type BookingSteps = typeof bookingSteps[number];

export const bookingStepExprs = ['$eq', '$ne'] as const;
export type BookingStepExprs = typeof bookingStepExprs[number];

export const sortOrders = [1, -1] as const;
export type SortOrders = typeof sortOrders[number];

export const sortFields = ['bookingStep', 'dates.from', 'dates.to', 'price'] as const;
export type SortFields = typeof sortFields[number];


export interface DateRange {
  lower: number;
  upper: number;
}

export interface DateRangeLimits {
  lower: string;
  upper: string;
}

export interface Knobs {
  lower: number;
  upper: number;
}

export interface Payment {
  _id: string;
  date: string;
  amount: number;
  paymentMethod: PaymentMethods;
  room_id?: string;
}

export interface PaymentQuery {
  dateRangeLimits: DateRangeLimits | null;
  room_id?: string | null;
  paymentMethod?: string | null;
}

export interface Booking {
  _id: string;
  room_id: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  price: number;
  discount: number;
  bookingStep: BookingSteps;
  dates: {
    from: string;
    to: string;
  };
  payments: Payment[];
  info?: string;
  totalPaid?: number; // virtuals
  balance?: number; // virtuals
}

export interface BookingQuery {
  dateRangeLimits: DateRangeLimits | null;
  room_id?: string | null;
  bookingStep?: {
    expr: string;
    val: BookingSteps;
  } | null;
  sort?: { field: string, order: SortOrders} | null;
  skip?: number | null;
  limit?: number | null;
}

export interface Room {
  _id?: string;
  name: string;
  price: number;
  bookings?: Booking[] | string[];
}

export interface Company {
  _id: string;
  users?: User[] | string[];
  companyName: string;
  rooms: Room[];
}

export interface User {
  _id?: string;
  login: string;
  password?: string;
  email?: string;
  loading?: boolean;
  role?: string;
  activated?: boolean;
  blocked?: boolean;
  uniqueId?: any;
  v?: number;
  lang?: string;
}

export interface CompanySignup {
  companyName: string;
  user: User;
}

export interface FormFieldOptions {
  title: string;
  subTitle: string;
  iconName: string;
  inputLable: string;
  inputType?: string;
  errors: Map<string, string>;
  formControl: {
    formState: any;
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
  }
}

export type UpdateOn = 'change' | 'blur' | 'submit';
export type RoomFormFields = 'price' | 'name';
export type OperatorFormFields = 'email';
