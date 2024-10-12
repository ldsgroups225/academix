// showToast.ts
import { toastActions } from '@src/providers/Toast';
import { IToastParams, ToastType } from "@components/ToastMessage/ToastTypes";

/**
 * Displays a toast message.
 *
 * @param msg - The message to display in the toast.
 * @param type - The type of the toast. Optional.
 * @param duration - The duration of the toast in milliseconds. Optional.
 */
export function showToast(msg: string, type?: ToastType, duration?: number) {
  const toastParams: IToastParams = {
    msg,
    type: type || ToastType.Info,
    duration: duration || 1500
  };
  toastActions.open(toastParams);
}