import React, { FC, ReactElement, useState, useEffect } from "react";

import Router from "next/router";

import { magic } from "../lib/magic";
import { UserContext } from "../lib/UserContext";

import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

const HomePage: FC = (): ReactElement => {
  const [user, setUser] = useState({ loading: true });

  useEffect(() => {
    //@ts-ignore -> No types yet.
    magic?.user?.isLoggedIn().then((isLoggedIn) => {
      //@ts-ignore -> No types yet.
      if (isLoggedIn)
        magic?.user?.getMetadata().then((userData) => setUser(userData));
    });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="flex justify-center items-center flex-row h-screen">
        {!user?.email ? <LoginPage /> : <ProfilePage />}
      </div>
    </UserContext.Provider>
  );
};

export default HomePage;
