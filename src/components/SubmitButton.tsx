import { ReactElement, FC, useState, useContext } from "react";
import Router from "next/router";

import styles from "./SubmitButton.module.scss";

import { magic } from "../../lib/magic.ts";
import { UserContext } from "../../lib/UserContext.ts";

import { ISubmitButton } from "../../types";

import Loading from "../src/components/LoadingIcon";
import LoadingIcon from "./LoadingIcon";

const SubmitButton: FC<ISubmitButton> = ({
  email,
  setIsLoading,
}: ISubmitButton): ReactElement => {
  const [user, setUser] = useContext(UserContext);

  const handleLogin = async (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    if (email) {
      try {
        //@ts-ignore -> No types yet.
        await magic?.auth?.loginWithMagicLink({
          email,
          redirectURI: window.location.href,
        });
        //@ts-ignore -> No types yet.
        let userMetadata = await magic?.user
          ?.getMetadata()
          .then((userData) => setUser(userData));
        Router.push("/ProfilePage");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <button
        className={`${styles.SubmitButton} button rounded-xl text-white h-10 w-2/4 mt-4`}
        type="button"
        onClick={handleLogin}
      >
        Log In
      </button>
    </>
  );
};

export default SubmitButton;
