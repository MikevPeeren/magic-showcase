import { ReactElement, FC, useContext } from "react";

import { UserContext } from "../lib/UserContext.ts";

const ProfilePage: FC = (): ReactElement => {
  const [user, setUser] = useContext(UserContext);

  console.log(user);
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="font-extrabold m-12">
        You have succesfully logged in through Magic 🪄
      </h1>
      {user?.issuer && (
        <div className="flex flex-col justify-between text-center">
          <div className="label">Your Email is:</div>
          <div className="user-info">{user.email}</div>

          <div className="label">Your UserID is:</div>
          <div className="user-info">{user.issuer}</div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
