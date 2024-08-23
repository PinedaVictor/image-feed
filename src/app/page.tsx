import Image from "next/image";
import { getFlickrFeed } from "./api/actions/flickr";
import { Header } from "@/components/atomic/atoms/Header";
import { ImageGrid } from "@/components/atomic/molecules/ImageGrid";

export default function Home() {
  getFlickrFeed();
  return (
    <main className="">
      <div className="md:flex flex-wrap items-center md:items-center bg-slate-700 p-4 rounded-md">
        <Header title="Buzz Solutions Coding Challenge" />
        {/* TODO: Abstract into component */}
        <div className=" w-[100%]">
          <div className="mt-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-6 text-slate-50"
            >
              Search Image API
            </label>
            <input
              id="search"
              name="search"
              type="text"
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
      </div>
      <ImageGrid />
    </main>
  );
}
