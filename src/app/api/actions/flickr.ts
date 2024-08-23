"use server";
import { DOMParser } from "xmldom";

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
    console.log("parsed data:", parsedData);
  } catch (error) {
    console.error(error);
  }

  return Response.json({ sup: true });
};

type ParsedEntry = {
  title: string;
  imgUrl: string;
  author: string;
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

const parseFlickrText = (text: string) => {};
