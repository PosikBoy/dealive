"use client";
import React from "react";
import { RootStoreContext } from "@/stores/root-store-context";
import RootStore from "@/stores/root-store";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const ContextProvider = (props) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="wrapper">
        <Header />
        <div className="content">{props.children}</div>
        <Footer />
      </div>
    </RootStoreContext.Provider>
  );
};

export default ContextProvider;
