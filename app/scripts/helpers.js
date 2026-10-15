export function returnAlt(image) {
  if (image.alt) {
    return image.alt;
  } else {
    return "Image alt text";
  }
}
export function returnGridDate(datestr) {
  const date = new Date(datestr);

  const mm = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${mm}.${dd}.${yyyy}`;
}
export const defaultMetaTitle = "Participant Systems";
export const defaultMetaDisc =
  "We are a purpose-driven studio crafting the design language, creative interfaces, and intentional objects that empower visionary brands and vibrant communities. ";
