import { ReactElement, FC, useEffect, useState } from "react";

import styles from "./SubmitButton.module.scss";

import { magic } from "../utils/magic";

import { ISubmitButton } from "../../types";

const SubmitButton: FC<ISubmitButton> = ({
  email,
}: ISubmitButton): ReactElement => {
  const handleLogin = async (event: React.MouseEvent<HTMLElement>) => {
    if (email) {
      try {
        //@ts-ignore -> No types yet.
        await magic?.auth?.loginWithMagicLink({
          email,
          redirectURI: window.location.href,
        });
      } catch (error) {}
    }
  };

  return (
    <button
      className={`${styles.SubmitButton} button rounded-xl text-white h-10 w-2/4 mt-4`}
      type="button"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};

export default SubmitButton;
