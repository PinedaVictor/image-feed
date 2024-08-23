"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { type ParsedEntry } from "@/lib/types";
import { getFlickrFeed } from "@/app/api/actions/flickr";
import { ImageGridItem } from "../atoms";
import { GripWrapper } from "../atoms/GridWrapper";

export const ImageGrid: FC = () => {
  const [feed, setFeed] = useState<[]>();
  const [loading, setloading] = useState(true);

  const getFeedData = useCallback(async () => {
    const data = await getFlickrFeed("");
    console.log("The data:", data);
    if (data) {
      setFeed(data);
      setloading(false);
    }
  }, []);

  useEffect(() => {
    getFeedData();
  }, [getFeedData]);

  return (
    <GripWrapper>
      {loading || !feed ? (
        <>Loading...</>
      ) : (
        <>
          {feed.map((image: ParsedEntry, index) => (
            <ImageGridItem
              key={index}
              imgUrl={image.imgUrl}
              title={image.title}
              author={image.author}
            />
          ))}
        </>
      )}
    </GripWrapper>
  );
};
