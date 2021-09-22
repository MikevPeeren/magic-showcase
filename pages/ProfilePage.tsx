import { ReactElement, FC, useContext } from "react";

import { useRouter } from "next/router";

import { UserContext } from "../lib/UserContext";

const ProfilePage: FC = (): ReactElement => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-row h-screen">
      <div className="flex flex-col justify-center text-center">
        <h1 className="font-extrabold m-12">
          You have successfully logged in through Magic 🪄
        </h1>
        {(user?.issuer || router?.query) && (
          <div className="flex flex-col justify-between text-center">
            <div className="label">Your Email is:</div>
            <div className="user-info">
              {user?.email ? user?.email : router?.query?.email}
            </div>

            <div className="label">Your UserID is:</div>
            <div className="user-info">
              {user?.issuer ? user?.issuer : router?.query?.issuer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
