// Dosage form -> illustration name. Kept in its own small module so client components
// (e.g. ProductThumb on the home page) can use it without pulling the whole catalogue
// and monograph data into the browser bundle.
export const formArt = {
  Tablet: "tablets",
  Capsule: "capsules",
  Injection: "injectables",
  "Syrup & Liquid": "liquids",
  "Gel & Topical": "topicals",
  "Powder & Sachet": "wellness",
};
