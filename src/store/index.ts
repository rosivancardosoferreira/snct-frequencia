import { configureStore } from "@reduxjs/toolkit";
import { awaitRequest } from "./slices/awaitRequest";
import { allActivitys } from "./slices/allActivitys";
import { modalAlert } from "./slices/modalAlert";

const store = configureStore({
  reducer: {
    awaitRequest,
    allActivitys,
    modalAlert
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
