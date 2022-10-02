import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllActivityItem } from "_types/iServiceActivitys";
import { RootState } from "../index";

const initialState = [] as AllActivityItem[];

const allActivitysSlice = createSlice({
  name: "allActivitys",
  initialState,
  reducers: {
    changeAllActivitys(_, { payload }: PayloadAction<AllActivityItem[] | []>) {
      return payload;
    },
    resetAllActivitys() {
      return { ...initialState };
    }
  }
});

export const { changeAllActivitys, resetAllActivitys } =
  allActivitysSlice.actions;

export const allActivitys = allActivitysSlice.reducer;

export const selectAllActivitys = (state: RootState) => state.allActivitys;
