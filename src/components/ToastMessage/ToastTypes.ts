/**
 * Enum representing the types of toast messages.
 */
export enum ToastType {
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
  Info = 'info'
}

/**
 * Interface for the toast message parameters.
 */
export interface IToastParams {
  /** The message to be displayed */
  msg: string;
  /** The duration of the toast message in milliseconds */
  duration?: number;
  /** The type of the toast message */
  type?: ToastType;
}

/**
 * Interface for the ref object of the ToastMessage component.
 */
export interface ToastMessageRef {
  open: (param: IToastParams) => void;
}
