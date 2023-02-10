import Link from "@/views/Link";
import classes from "@/views/utils/classes";
import styles from "@/views/styles/carousel.module.scss";
import { useState } from "react";
import Image from "@/views/Image";

export default function Carousel(props) {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  if (!props) return null;

  const { data, style = "carousel", className, ...rest } = props;

  const handleImageClick = () => {
    const nextIndex = displayedImageIndex + 1;
    setDisplayedImageIndex(nextIndex % data.length);
  };

  return (
    <span
      {...rest}
      className={classes(styles[style], className)}
      onClick={handleImageClick}
    >
    
      <Image {...data.at(displayedImageIndex)} />
      <span className={styles.content}>
        hewwo
      </span>
    </span>
  );
}
