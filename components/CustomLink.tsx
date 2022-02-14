import { Link } from "@mui/material";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    return (
      <Link href={props.href} color="#000000">
        {props.children}
      </Link>
    );
  }
  return (
    <Link
      href={props.href}
      color="#000000"
      target="_blank"
    >
      {props.children}
    </Link>
  );
};

export default CustomLink;
