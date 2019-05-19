import portuguese from "../config/portuguese.json";
import english from "../config/english.json";

const getText = (locale, field) => {
  if (locale === "en" || "en-US") return english[field];
  return portuguese[field];
};

export default getText;
