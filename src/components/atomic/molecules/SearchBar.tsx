"use client";
import type { FC, ChangeEvent, MouseEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useDataState, type DataState } from "@/store/strore";

export const SearchBar: FC = () => {
  const dataState = useDataState((state: DataState) => state.search);
  const [searchHelp, setSearchHelp] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dataState.setText(event.target.value);
  };

  const triggerSearch = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    if (dataState.text.length >= 1) {
      dataState.triggerSearch(true); // Trigger search by updating the global state
      setSearchHelp("");
    } else {
      setSearchHelp("Search text is empty. Please enter at 1 one search term.");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      triggerSearch(event);
    }
  };

  return (
    <div className=" w-[100%]">
      <div className="mt-2">
        {/* TODO: Abstract label and input into FormElement component */}
        <label
          htmlFor="search"
          className="text-sm font-medium leading-6 text-slate-50"
        >
          Search Image API
        </label>
        <input
          id="search"
          name="search"
          type="text"
          value={dataState.text}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="hicking"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="pt-4">
        <button
          type="button"
          onClick={triggerSearch}
          className=" inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Search
        </button>
      </div>
      <p className=" text-red-500">{searchHelp}</p>
    </div>
  );
};
