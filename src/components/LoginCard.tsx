import { ReactElement, FC } from "react";

import Input from "./Input";
import LoginIcon from "./LoginIcon";
import SubmitButton from "./SubmitButton";

const LoginCard: FC = (): ReactElement => {
  return (
    <div className="bg-white h-3/4 w-3/4 md:h-3/5 lg:h-2/4 lg:w-2/4 xl:w-3/4 xl:h-4/5 2xl:w-1/4 2xl:h-2/4 rounded-2xl my-4">
      <div className="m-auto h-full overflow-auto py-4 text-center flex flex-col justify-center items-center">
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
