
import { createContext, useContext } from "react";
import RootStore from "./root-store";

export const RootStoreContext = createContext(RootStore)

export const useStores = () => {
    const context = useContext(RootStoreContext);
    if (context == null) {
        throw new Error('')
    }

    return context;
}