import { FC } from "react";
import { type ParsedEntry } from "@/lib/types";
import Image from "next/image";

export const ImageGridItem: FC<ParsedEntry> = (props) => {
  return (
    <a href={props.imgUrl} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          src={props.imgUrl}
          width={100}
          height={100}
          // TODO: Configure Alt tags for each image
          alt="Picture of the author"
          priority={true}
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{props.title}</h3>
      <p className="italic text-gray-500">{props.author}</p>
    </a>
  );
};
