import NextImage from "next/image";

export default function Image(props) {
  if (!props) return null;
  const {
    data: { attributes: image },
    ...rest
  } = props;
  return (
    <NextImage
      {...rest}
      src={`http://localhost:1337${image.url}`}
      alt={image.alternativeText || "Image"}
      width={image.width}
      height={image.height}
    />
  );
}
