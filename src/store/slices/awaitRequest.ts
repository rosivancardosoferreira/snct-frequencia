import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iSliceAwaitRequest } from "_types/iAwaitRequest";
import { RootState } from "../index";

const initialState: iSliceAwaitRequest = {
  type: "await",
  isOpen: false
};

const awaitRequestSlice = createSlice({
  name: "awaitRequest",
  initialState,
  reducers: {
    changeAwaitRequest(state, { payload }: PayloadAction<iSliceAwaitRequest>) {
      return { ...state, ...payload };
    },
    resetAwaitRequest() {
      return { ...initialState };
    }
  }
});

export const { changeAwaitRequest, resetAwaitRequest } =
  awaitRequestSlice.actions;

export const awaitRequest = awaitRequestSlice.reducer;

export const selectAwaitRequest = (state: RootState) => state.awaitRequest;
