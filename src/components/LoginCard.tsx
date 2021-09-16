import { ReactElement, FC } from "react";

import Input from "./Input";
import LoginIcon from "./LoginIcon";
import SubmitButton from "./SubmitButton";

// w-5/6 h-5/6 md:w-2/4 md:h-2/4 lg:w-1/4 sm:w-3/4 sm:h-2/4
const LoginCard: FC = (): ReactElement => {
  return (
    <div className="bg-white xl:w-2/6 xl:h-3/4 h-3/4 sm:w-2/4 w-4/5 rounded-2xl">
      <div className="w-full h-full text-center flex flex-col justify-center items-center">
        <LoginIcon />
        <div className="py-4">
          <h1 className="font-bold lg:text-2xl tracking-wider">Welcome Back</h1>
          <h2 className="font-light lg:text-lg tracking-wide">
            Let Magic do the Magic 🪄
          </h2>
        </div>
        <Input title={"email"} inputID={"email"} inputName={"email"} />
        <SubmitButton />
      </div>
    </div>
  );
};

export default LoginCard;
