import { ReactElement, FC } from "react";

import styles from "./SubmitButton.module.scss";

const SubmitButton: FC = (): ReactElement => {
  return (
    <button
      className={`${styles.SubmitButton} button rounded-xl text-white max-h-10 h-10 w-2/4 mt-4`}
      type="button"
    >
      Log In
    </button>
  );
};

export default SubmitButton;
