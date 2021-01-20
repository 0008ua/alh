import { Type } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { environment } from 'src/environments/environment';

export const paymentMethods = [
  ['cash', 'Cash'],
  ['card', 'Card'],
] as const;
export type PaymentMethods = typeof paymentMethods[number][0];

export const bookingSteps = [
  [null, 'All'],
  ['preorder', 'Preorder'],
  ['reserved', 'Reserved'],
  ['paid', 'Paid'],
  ['cancelled', 'Cancelled'],
] as const;
export type BookingSteps = typeof bookingSteps[number][0];

export const bookingStepExprs = [
  ['$eq', 'Equal'],
  ['$ne', 'Not Equal'],
] as const;
export type BookingStepExprs = typeof bookingStepExprs[number][0];

export const sortOrders = [
  [1, 'Ascending'],
  [-1, 'Descending'],
] as const;
export type SortOrders = typeof sortOrders[number][0];

export const sortFields = [
  ['bookingStep', 'Booking Step'],
  ['dates.from', 'Date from'],
  ['dates.to', 'Date to'],
  ['price', 'Price'],
] as const;
export type SortFields = typeof sortFields[number][0];


export interface DateRange {
  lower: number;
  upper: number;
}

export interface RangeLimits {
  lower: string;
  upper: string;
}

export interface Knobs {
  lower: number;
  upper: number;
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
  payments:
  {
    _id: string;
    date: string;
    amount: number;
    paymentMethod: PaymentMethods;
  }[];
  info?: string;
  totalPaid?: number; // virtuals
  balance?: number; // virtuals
}

export interface BookingQuery {
  dateRange: RangeLimits | null;
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

export interface CompanyWithBookings {
  _id: string;
  companyName: string;
  rooms: Room;
  bookings: Booking[];
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
