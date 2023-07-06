import { createHash } from "crypto";

export const generateSHA256Hash = (input: string): string => {
  const hash = createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
};
