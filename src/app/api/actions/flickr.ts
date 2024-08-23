"use server";
import { NextResponse } from "next/server";
import { DOMParser } from "xmldom";
import { type ParsedEntry } from "@/lib/types";

export const getFlickrFeed = async () => {
  try {
    const feed = await fetch(
      "https://www.flickr.com/services/feeds/photos_public.gne"
    );
    const data = await feed.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    const imgEntries = xmlDoc.getElementsByTagName("entry");
    const parsedData = parseEntries(imgEntries);
    return JSON.parse(JSON.stringify(parsedData));
  } catch (error) {
    return NextResponse.json({
      error: `An error occured while retrieving image data: ${error}`,
    });
  }
};

const parseEntries = (entries: HTMLCollectionOf<Element>) => {
  return Array.from(entries).map((entry: Element): ParsedEntry => {
    const title = entry.getElementsByTagName("title")[0]?.textContent || "";
    const authorName = entry.getElementsByTagName("name")[0]?.textContent || "";
    const imageUrl =
      Array.from(entry.getElementsByTagName("link"))
        .find(
          (link) =>
            link.getAttribute("rel") === "enclosure" &&
            link.getAttribute("type") === "image/jpeg"
        )
        ?.getAttribute("href") || "";
    const imgEntry = {
      title: title,
      imgUrl: imageUrl,
      author: authorName,
    };
    return imgEntry;
  });
};

const searhFlikr = (text: string) => {};
