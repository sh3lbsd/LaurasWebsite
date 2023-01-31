import Link from "@/views/Link";
import classes from "@/views/utils/classes";
import styles from "@/views/styles/article.module.scss";
import { Fragment } from "react";

export default function Article(props) {
  if (!props) return null;
  const {
    paragraphs,
    divider,
    link,
    style = "article",
    className,
    ...rest
  } = props;
  return (
    <span {...rest} className={classes(styles[style], className)}>
      {paragraphs?.map((paragraph, index) => (
        <Fragment key={`article-paragraph-${index}`}>
          {paragraph.title}
        </Fragment>
      ))}
      {link && (
        <section>
          {link.map((link, index) => (
            <Link {...link} key={`article-link-${index}`} />
          ))}
        </section>
      )}
    </span>
  );
}
