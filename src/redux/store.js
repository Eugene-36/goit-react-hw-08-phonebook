import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer } from "./actions/index";
import { authReducer } from "./auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//console.log(authReducer);
import storage from "redux-persist/lib/storage";
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
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    serializableCheck: false,
    //
    // },
  }),
  logger,
  myMiddleware,
];
// const todosPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const store = configureStore({
  reducer: {
    allUsers: reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});

const persistor = persistStore(store);
export default { store, persistor };
