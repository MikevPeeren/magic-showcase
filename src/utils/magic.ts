import { Magic } from "magic-sdk";

const createMagic = (key: string | undefined) => {
  return typeof window != "undefined" && key && new Magic(key);
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
