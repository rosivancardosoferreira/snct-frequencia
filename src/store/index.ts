import { configureStore } from "@reduxjs/toolkit";
import { awaitRequest } from "./slices/awaitRequest";
import { allActivitys } from "./slices/allActivitys";

const store = configureStore({
  reducer: {
    awaitRequest,
    allActivitys
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
