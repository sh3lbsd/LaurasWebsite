import Link from "next/link";
import styles from "@/views/styles/card.module.scss";
import classes from "@/views/utils/classes";

export default function Card(props) {
  if (!props) return null;
  const {
    title,
    description,
    expand,
    style = "card",
    className,
    ...rest
  } = props;
  return (
    <span {...rest} className={classes(styles[style], className)}>
      {title && <h1>{title}</h1>}
      {description && (
        <p>
          {description}
          {expand && <Link href={expand.url}>&nbsp;{expand.label}</Link>}
        </p>
      )}
    </span>
  );
}
