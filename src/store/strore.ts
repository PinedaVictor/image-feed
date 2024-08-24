// https://github.com/pmndrs/zustand
import { create } from "zustand";

// Search text interface
interface SearchText {
  text: string;
  setText: (text: string) => void;
  executeSearch: boolean;
  triggerSearch: (executeSearch: boolean) => void;
}

// Add data that needs to be updated at multiple levels of the execution tree
export interface DataState {
  search: SearchText;
}

// useDataState global state hook
export const useDataState = create<DataState>((set) => ({
  search: {
    text: "",
    setText: (text) =>
      set((state) => ({ search: { ...state.search, text: text } })),
    executeSearch: false,
    triggerSearch: (executeSearch: boolean) =>
      set((state) => ({
        search: { ...state.search, executeSearch: executeSearch },
      })),
  },
}));
