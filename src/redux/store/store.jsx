import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? require("redux-persist/lib/storage").default
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const dummyReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

const rootReducerWithReset = (state, action) => {
  if (action.type === "RESET_STORE") {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducerWithReset);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

const store = makeStore();
export const persistor = persistStore(store);
export default store;
