import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iSliceModalAlert } from "_types/iModalAlert";
import { RootState } from "../index";

const initialState: iSliceModalAlert = {
  isOpen: false,
  title: null,
  message: null,
  textAction: null,
  textActionCancel: null
};

const modalAlertSlice = createSlice({
  name: "modalAlert",
  initialState,
  reducers: {
    changeModalAlert(state, { payload }: PayloadAction<iSliceModalAlert>) {
      return { ...state, ...payload };
    },
    resetModalAlert() {
      return { ...initialState };
    }
  }
});

export const { changeModalAlert, resetModalAlert } = modalAlertSlice.actions;

export const modalAlert = modalAlertSlice.reducer;

export const selectModalAlert = (state: RootState) => state.modalAlert;
