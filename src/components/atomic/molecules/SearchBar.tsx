"use client";
import type { FC, ChangeEvent } from "react";
import { useState, useEffect } from "react";

export const SearchBar: FC = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <div className=" w-[100%]">
      <div className="mt-2">
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
          value={searchInput}
          onChange={handleSearch}
          placeholder="hicking"
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="pt-4">
        <button
          type="button"
          className=" inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};
