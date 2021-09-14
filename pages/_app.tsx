import { AppProps } from "next/app";

import React, { FC, ReactElement } from "react";

// Style Imports
import "../styles/global.scss";
import "tailwindcss/tailwind.css";

const MyApp: FC = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
