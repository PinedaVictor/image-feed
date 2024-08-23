import { FC } from "react";
import Image from "next/image";
import { type ParsedEntry } from "@/lib/types";
import { ExternalLink } from "./ExternalLink";

export const ImageGridItem: FC<ParsedEntry> = (props) => {
  const title = props.title.length === 0 ? "Title Not Found" : props.title;
  const author =
    props.author.length === 0 ? "Author Not Found" : `by ${props.author}`;
  return (
    <ExternalLink
      link={props.imgUrl}
      className="group text-sm inline-block overflow-hidden"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          src={props.imgUrl}
          width={100}
          height={100}
          alt={`flickr image ${props.title} by ${props.author}`}
          priority={true}
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
      <p className="italic text-gray-500">{author}</p>
    </ExternalLink>
  );
};
