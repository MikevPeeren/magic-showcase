import { ReactElement, FC } from "react";

import styles from "./SubmitButton.module.scss";

const SubmitButton: FC = (): ReactElement => {
  return (
    <button
      className={`${styles.SubmitButton} button rounded-xl text-white w-3/4 h-12 mt-4`}
      type="button"
    >
      Log In
    </button>
  );
};

export default SubmitButton;
