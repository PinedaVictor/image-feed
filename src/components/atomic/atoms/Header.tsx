import { type FC } from "react";

type Props = {
  title: string;
};

export const Header: FC<Props> = (props) => {
  return (
    <div className=" min-w-full">
      <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        {props.title}
      </h2>
    </div>
  );
};
