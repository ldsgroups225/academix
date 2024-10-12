import React from "react";
import { ToastMessage } from "@src/components";
import { IToastParams } from "@components/ToastMessage/ToastTypes";

let useToastRef: { open: (arg0: IToastParams) => void; };

const setUseBackDropRef = (useToastRefProp: { open: (arg0: IToastParams) => void; }) => {
  useToastRef = useToastRefProp;
};

function ToastUtils() {
  return <ToastMessage ref={setUseBackDropRef} />;
}

export const toastActions = {
  open(param: IToastParams) {
    useToastRef?.open(param);
  },
};

export default ToastUtils;