export function padding(
  top = null, left = null, right = null, bottom = null
) {
  return {
    paddingTop: top ?? undefined,
    paddingRight: right ?? undefined,
    paddingBottom: bottom ?? undefined,
    paddingLeft: left ?? undefined,
  };
}