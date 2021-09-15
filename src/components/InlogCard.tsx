import { ReactElement, FC } from "react";

import Input from "./Input";

const InlogCard: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center bg-white w-1/4 h-2/4 rounded-xl p-6">
      <div className="w-3/4 text-center">
        <div>TODO: Image based for login</div>
        <Input title={"email"} inputID={"email"} inputName={"email"} />
        <div>TODO: Submit button</div>
      </div>
    </div>
  );
};

export default InlogCard;
