// NextJS
import { AppProps } from "next/app";

// React
import React, { ReactElement } from "react";

// Style Imports
import "../styles/global.scss";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
