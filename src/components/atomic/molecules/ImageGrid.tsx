"use client";
import type { FC } from "react";
import type { ParsedEntry } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import { getFlickrFeed } from "@/app/api/actions/flickr";
import { useDataState, type DataState } from "@/store/strore";
import { ImageGridItem } from "../atoms";
import { GripWrapper } from "../atoms/GridWrapper";
import { Loading } from "../atoms/Loading";

export const ImageGrid: FC = () => {
  const [feed, setFeed] = useState<[]>();
  const [loading, setLoading] = useState(true);
  const dataState = useDataState((state: DataState) => state);

  // Get initial feed image data
  const getFeedData = useCallback(async () => {
    const data = await getFlickrFeed("");
    if (data) {
      setFeed(data);
      setLoading(false);
    }
  }, []);

  // Function to search for images based on user input
  const searchImages = useCallback(async (searchInput: string) => {
    setLoading(true);
    const data = await getFlickrFeed(searchInput);
    if (data) {
      setFeed(data);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (dataState.search.text === "") {
      getFeedData();
    }
  }, [getFeedData, dataState]);

  useEffect(() => {
    if (dataState.search.executeSearch && dataState.search.text.length >= 1) {
      searchImages(dataState.search.text);
      dataState.search.triggerSearch(false);
    }
  }, [searchImages, dataState]);

  return (
    <>
      {loading || !feed ? (
        <Loading />
      ) : feed.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <p className=" text-lg text-slate-800">{`No results found for "${dataState.search.text}"`}</p>
        </div>
      ) : (
        <GripWrapper>
          {feed.map((image: ParsedEntry, index) => (
            <ImageGridItem
              key={index}
              imgUrl={image.imgUrl}
              title={image.title}
              author={image.author}
            />
          ))}
        </GripWrapper>
      )}
    </>
  );
};
