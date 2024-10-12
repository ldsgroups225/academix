// showToast.test.ts
import { toastActions } from '@src/providers/Toast';
import { showToast } from './showToast';
import {ToastType} from "@components/ToastMessage/ToastTypes";

jest.mock('@src/providers/Toast');

describe('showToast', () => {
  it('should call toastActions.open with the provided message and default values', () => {
    const msg = 'Test message';

    showToast(msg);

    expect(toastActions.open).toHaveBeenCalledWith({
      msg,
      type: ToastType.Info,
      duration: 1500
    });
  });

  it('should call toastActions.open with the provided message, type, and duration', () => {
    const msg = 'Test message';
    const type = ToastType.Success;
    const duration = 3000;

    showToast(msg, type, duration);

    expect(toastActions.open).toHaveBeenCalledWith({
      msg,
      type,
      duration
    });
  });
});