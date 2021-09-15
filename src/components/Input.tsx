import { ReactElement, FC } from "react";

const Input: FC = ({ title, inputID, inputName }): ReactElement => {
  return (
    <input
      className="w-full rounded-xl border p-2"
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
