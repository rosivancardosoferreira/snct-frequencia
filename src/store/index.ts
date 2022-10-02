import { configureStore } from "@reduxjs/toolkit";
import { awaitRequest } from "./slices/awaitRequest";

const store = configureStore({
  reducer: {
    awaitRequest
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
