import { ReactElement, FC } from "react";

import Input from "./Input";
import LoginIcon from "./LoginIcon";
import SubmitButton from "./SubmitButton";

const LoginCard: FC = (): ReactElement => {
  return (
    <div className="bg-white w-5/6 h-5/6 md:w-2/4 md:h-2/4 lg:w-1/4 /4 sm:w-3/4 sm:h-2/4 rounded-2xl">
      <div className="w-full h-full text-center flex flex-col justify-center items-center">
        <LoginIcon />
        <Input title={"email"} inputID={"email"} inputName={"email"} />
        <SubmitButton />
      </div>
    </div>
  );
};

export default LoginCard;
