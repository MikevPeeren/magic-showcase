import { ReactElement, FC } from "react";

const Input: FC = ({ title, inputID, inputName }): ReactElement => {
  return (
    <input
      className="w-3/4 rounded-xl border p-2 mt-6"
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
