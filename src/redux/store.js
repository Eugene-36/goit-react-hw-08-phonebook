import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "./actions/index";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import storage from "redux-persist/lib/storage";
const myMiddleware = (store) => (next) => (action) => {
  console.log("моя прослойка", action);

  next(action);
};
// const persistConfig = {
//   key: "contacts",
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  myMiddleware,
];
// const todosPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };
const store = configureStore({
  reducer: {
    allUsers: reducer,
  },
  middleware,
});

//const persistor = persistStore(store);
export default store;
