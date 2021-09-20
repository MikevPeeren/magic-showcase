import { ReactElement, FC } from "react";

import Input from "../src/components/Input";
import LoginIcon from "../src/components/LoginIcon";
import SubmitButton from "../src/components/SubmitButton";

const LoginPage: FC = (): ReactElement => {
  return (
    <div className="w-full h-full 2xl:w-2/4 overflow-auto my-4 text-center flex flex-col justify-center items-center">
      <LoginIcon />
      <div className="py-4">
        <h1 className="font-bold lg:text-2xl tracking-wider">Welcome Back</h1>
        <h2 className="font-light lg:text-lg tracking-wide">
          Let Magic do the work 🪄
        </h2>
      </div>
      <Input title={"email"} inputID={"email"} inputName={"email"} />
      <SubmitButton />
    </div>
  );
};

export default LoginPage;
