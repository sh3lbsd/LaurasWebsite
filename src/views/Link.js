import NextLink from "next/link";
import styles from "@/views/styles/link.module.scss";
import classes from "@/views/utils/classes";

export default function Link(props) {
  if (!props) return null;
  const { url, label, style = "button", className, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={classes(styles[style], className)}
      href={url}
    >
      {label}
    </NextLink>
  );
}
