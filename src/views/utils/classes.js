export const classes = (...names) =>
  names.flatMap((name) => name || []).join(" ");

export default classes;
