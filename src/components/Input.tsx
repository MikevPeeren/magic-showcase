import { ReactElement, FC } from "react";

import { IInput } from "../../types";

const Input: FC<IInput> = ({
  title,
  inputID,
  inputName,
}: IInput): ReactElement => {
  return (
    <input
      className="w-2/4 rounded-xl border p-2 mt-6"
      id={inputID}
      name={inputName}
      title={title}
      placeholder="mikevpeeren@hotmail.com"
      type="text"
      required
    />
  );
};

export default Input;
