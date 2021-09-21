import { ReactElement, FC, useState, useContext } from "react";
import { useRouter } from "next/router";

import styles from "./SubmitButton.module.scss";

import { magic } from "../../lib/magic";
import { UserContext } from "../../lib/UserContext";

import { ISubmitButton } from "../../types";

import LoadingIcon from "./LoadingIcon";

const SubmitButton: FC<ISubmitButton> = ({
  email,
  setIsLoading,
}: ISubmitButton): ReactElement => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

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
        await magic?.user
          ?.getMetadata()
          .then((userData: { email: string; issuer: string }) => {
            setUser(userData);
            router.push(
              `/ProfilePage?email=${userData?.email}&issuer=${userData?.issuer}`,
              "profile"
            );
          });
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
