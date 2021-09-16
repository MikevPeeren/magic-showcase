import { ReactElement, FC } from "react";

import Image from "next/image";

import styles from "./LoginIcon.module.scss";

import PERSON_OUTLINE from "../../public/icons/person_outline.svg";
const LoginIcon: FC = (): ReactElement => {
  return (
    <div className="lg:w-20 lg:h-20 w-10 h-10 opacity-50">
      <Image
        src={PERSON_OUTLINE}
        className={`${styles.LoginIcon} rounded-full object-cover`}
        alt="person_outline"
        layout="responsive"
      />
    </div>
  );
};
export default LoginIcon;
