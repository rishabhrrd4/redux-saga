import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../slices/userSlice";
import rootSaga from "../saga/saga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) => {
    getDefaultMiddleWare.concat(sagaMiddleWare);
  },
});

sagaMiddleWare.run(rootSaga);

export default store;
