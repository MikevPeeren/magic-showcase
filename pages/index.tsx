import React, { FC, ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";

import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

const HomePage: FC = (): ReactElement => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", issuer: "" });

  useEffect(() => {
    //@ts-ignore -> No types yet.
    magic?.user?.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        //@ts-ignore -> No types yet.
        magic?.user?.getMetadata().then((userData) => {
          setUser(userData);
          router.push(
            `/ProfilePage?email=${userData?.email}&issuer=${userData?.issuer}`,
            "profile"
          );
        });
      }
    });
  }, [router]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="flex justify-center items-center flex-row h-screen">
        {!user?.email ? <LoginPage /> : <ProfilePage />}
      </div>
    </UserContext.Provider>
  );
};

export default HomePage;
