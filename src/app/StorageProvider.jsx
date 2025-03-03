"use client";
import React from "react";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import store, { persistor } from "../redux/store/store";

const PersistGate = dynamic(
  () =>
    import("redux-persist/integration/react").then((mod) => mod.PersistGate),
  { ssr: false }
);

const StorageProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StorageProvider;
