import React, { FC, ReactElement } from "react";

import InlogCard from "../src/components/InlogCard";

const HomePage: FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center flex-row h-screen">
      <InlogCard />
    </div>
  );
};

export default HomePage;
