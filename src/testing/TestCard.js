import Link from "@/views/Link";
import Image from "@/views/Image";
import styles from "@/views/styles/card.module.scss";
import classes from "@/views/utils/classes";

export default function TestCard(props) {
  if (!props) return null;
  const {
    title,
    description,
    expand,
    images,
    links,
    style = "Card",
    className,
    ...rest
  } = props;
  return (
    <div className="wrapper">
      <span {...rest} className={classes(styles[style], className)}>
        {title && <h1>{title}</h1>}

        {images && (
          <span className="images">
            {images.data.map((image) => (
              <Image key={image.id} {...{ data: image }} />
            ))}
          </span>
        )}

        {description && (
          <p>
            {description}
            {expand && (
              <>
                &nbsp;
                <Link {...expand} />
              </>
            )}
          </p>
        )}

        {/* cant get links to show as youtube videos */}
        {links && (
          <section>
            {links.map((link, index) => (
              <Link {...link} key={`card-link-${index}`} />
            ))}
          </section>
        )}
      </span>
    </div>
  );
}
