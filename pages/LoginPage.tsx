import { ReactElement, FC, useState } from "react";

import Input from "../src/components/Input";
import LoginIcon from "../src/components/LoginIcon";
import SubmitButton from "../src/components/SubmitButton";

import useDebounce from "../src/custom-hooks/useDebounce";

const LoginPage: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const debouncedEmail = useDebounce(email, 300);

  const inputChangedFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target?.value);
  };

  return (
    <div className="w-full h-full 2xl:w-2/4 overflow-auto my-4 text-center flex flex-col justify-center items-center">
      <LoginIcon />
      <div className="py-4">
        <h1 className="font-bold lg:text-2xl tracking-wider">Welcome</h1>
        <h2 className="font-light lg:text-lg tracking-wide">
          Let Magic do the work 🪄
        </h2>
      </div>
      <Input
        title={"email"}
        inputID={"email"}
        inputName={"email"}
        inputChangedFunction={inputChangedFunction}
      />
      <SubmitButton email={debouncedEmail} />
    </div>
  );
};

export default LoginPage;
