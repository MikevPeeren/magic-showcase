import React, { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  user: { email: string; issuer: string };
  setUser: Dispatch<SetStateAction<{ email: string; issuer: string }>>;
};

export const UserContext = createContext<Context>({
  user: { email: "", issuer: "" },
  setUser: (): void => {
    throw new Error("setContext function must be overridden");
  },
});
