import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const GripWrapper: FC<Props> = (props) => {
  return (
    <div className=" mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
      {props.children}
    </div>
  );
};
