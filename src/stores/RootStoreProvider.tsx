import { RootStore, RootStoreHydration } from "./RootStore";
import { createContext } from "vm";
import React from 'react'

const StoreContext = createContext();

let store: RootStore;

export function RootStoreProvider({
    children,
    hydrationData,
  }: {
    children: React.ReactNode;
    hydrationData?: RootStoreHydration;
  }) {
    // pass the hydration data to the initialization function
    const store = initializeStore(hydrationData);
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  }

  function initializeStore(initialData?: RootStoreHydration): RootStore {
    const _store = store ?? new RootStore();
  
    // if there is data call the root store hydration method
    if (initialData) {
      _store.hydrate(initialData);
    }
    // For server side rendering always create a new store
    if (typeof window === "undefined") return _store;
  
    // Create the store once in the client
    if (!store) store = _store;
  
    return _store;

  }
