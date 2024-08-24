"use server";
import { type ParsedEntry } from "@/lib/types";
import { NextResponse } from "next/server";
import { DOMParser } from "xmldom";
import { FLICKR_CONFIG } from "./config";

/**
 * GET Flickr public images
 * @param searchInput
 * @returns Image data from the Flickr API as an array of {title, imgUrl, author}
 */
export const getFlickrFeed = async (searchInput: string) => {
  try {
    const url = getUrl(searchInput);
    const feed = await fetch(url);
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

/**
 * Parse entries given from Flickr API
 * @param entries xml entries from flickr api text response
 * @returns parsed image data
 */
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

/**
 * Configure Flickr API URL
 * @param input search tags inputs
 * @returns Flickr API URL depending on whether tags are specified or not
 */
const getUrl = (searchTags: string): string => {
  if (searchTags === "") {
    return FLICKR_CONFIG.FLICKR_URL;
  } else {
    const encodedInput = encodeURIComponent(searchTags);
    return `${FLICKR_CONFIG.FLICKR_URL}?tags=${encodedInput}`;
  }
};
