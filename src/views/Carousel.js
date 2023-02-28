import Link from "@/views/Link";
import classes from "@/views/utils/classes";
import styles from "@/views/styles/carousel.module.scss";
import { useState } from "react";
import Image from "@/views/Image";

export default function Carousel(props) {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  if (!props) return null;

  const { images, links, style = "right", className, ...rest } = props;

  const handleImageClick = () => {
    const nextIndex = displayedImageIndex + 1;
    setDisplayedImageIndex(nextIndex % images.data.length);
  };

  const displayedImage = images.data.at(displayedImageIndex);

  const displayedLink = links?.at(displayedImageIndex);

  console.log(displayedImage);
  return (
    <span {...rest} className={classes(styles[style], className)}>
      <span onClick={handleImageClick}>
        <Image {...displayedImage} />
      </span>
      <span className={styles.content}>
        {displayedImage.attributes.caption}
        {displayedLink?.title}
        {displayedLink && <Link {...displayedLink} />}
      </span>
    </span>
  );
}
