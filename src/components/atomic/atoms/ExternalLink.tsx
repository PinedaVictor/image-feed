import type { FC } from "react";

type Props = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

export const ExternalLink: FC<Props> = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={props.className}
    >
      {props.children}
    </a>
  );
};
