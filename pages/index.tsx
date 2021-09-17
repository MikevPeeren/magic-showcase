import React, { FC, ReactElement } from "react";

import LoginPage from "./LoginPage";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center flex-row h-screen">
      <LoginPage />
    </div>
  );
};

export default HomePage;
