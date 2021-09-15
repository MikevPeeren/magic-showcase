import { ReactElement, FC } from "react";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const InlogCard: FC = (): ReactElement => {
  return (
    <div className="bg-white w-1/4 h-2/4 rounded-xl p-6">
      <div className="w-full h-full text-center flex flex-col justify-center items-center">
        <div>TODO: Image based for login</div>
        <Input title={"email"} inputID={"email"} inputName={"email"} />
        <SubmitButton />
      </div>
    </div>
  );
};

export default InlogCard;
