import { ReactElement, FC, useEffect, useState } from "react";

import styles from "./SubmitButton.module.scss";

import { magic } from "../utils/magic";

import { ISubmitButton } from "../../types";

const SubmitButton: FC<ISubmitButton> = ({
  email,
}: ISubmitButton): ReactElement => {
  const handleLogin = async (e) => {
    const email = "mikevpeeren@hotmail.com";
    const redirectURI = "http://localhost:3000";
    if (email) {
      await magic.auth.loginWithMagicLink({ email, redirectURI });
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
