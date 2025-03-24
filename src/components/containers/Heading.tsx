
export interface HeadingProps {
  title?: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <header>{title}</header>;
};
