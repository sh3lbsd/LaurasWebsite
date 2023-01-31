import Link from "@/views/Link";
import classes from "@/views/utils/classes";
import styles from "@/views/styles/article.module.scss";
import { Fragment } from "react";
import Image from "@/views/Image";

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
      {paragraphs.map((paragraph, index) => (
        <Fragment key={`article-paragraph-${index}`}>
          <h1>{paragraph.title}</h1>
          <p>{paragraph.text}</p>
          {paragraph.image.data && <Image {...paragraph.image} />}
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
