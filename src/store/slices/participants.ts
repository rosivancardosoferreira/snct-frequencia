import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iParticipants } from "_types/iParticipants";
import { RootState } from "../index";

const initialState = [] as iParticipants[];

const allParticipantsSlice = createSlice({
  name: "allParticipants",
  initialState,
  reducers: {
    changeAllParticipants(_, { payload }: PayloadAction<iParticipants[] | []>) {
      return payload;
    },
    resetAllParticipants() {
      return { ...initialState };
    }
  }
});

export const { changeAllParticipants, resetAllParticipants } =
  allParticipantsSlice.actions;

export const participants = allParticipantsSlice.reducer;

export const selectAllParticipants = (state: RootState) => state.participants;
