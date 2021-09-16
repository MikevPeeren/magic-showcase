import React, { FC, ReactElement } from "react";

import LoginCard from "../src/components/LoginCard";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center flex-row h-screen">
      <LoginCard />
    </div>
  );
};

export default HomePage;
