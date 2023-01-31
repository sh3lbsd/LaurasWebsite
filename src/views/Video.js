import styles from "@/views/styles/video.module.scss";
import classes from "@/views/utils/classes";

export default function Video(props) {
  if (!props) return null;
  const { url, label, style = "video", className, ...rest } = props;
  return (
    <iframe
      {...rest}
      className={classes(styles[style], className)}
      src={url}
      title={label}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
}
