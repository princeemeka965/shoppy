"use client";

import { ReactNode } from "react";
import { AvatarIcon } from "@/icons";
import { Avatar, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { shortname } from "@/helpers/shortname";

export const SideContent = (props: any): ReactNode => {
  const userData = useSelector((state: RootState) => state.userData.user);

  const emitSignUp = (data: Boolean) => {
    props.activateSignUp(data);
  };

  const emitLogin = (data: Boolean) => {
    props.activateLogin(data);
  };

  return (
    <>
      <div className="py-3 px-6 flex flex-col gap-1 rounded-md bg-maniacBlue">
        {Object.keys(userData).length === 0 ? (
          <>
            <div className="flex gap-4">
              <AvatarIcon />
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-base text-black">
                  Hi, user let’s get started
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button color="blue" onClick={() => emitSignUp(true)}>
                Join now
              </Button>
              <Button
                className="bg-white text-black"
                onClick={() => emitLogin(true)}
              >
                Login
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4">
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-base text-black">
                  Hi, {shortname(userData.name)}, welcome to Shoppy!!!
                </p>
              </div>
            </div>
            <div className="flex flex-col my-1 gap-2">
              <p className="text-xs text-black">
                Have a beautiful shopping experience with our AI sales Rep{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="bg-white text-black">Chat with Alexia</Button>
            </div>
          </>
        )}
      </div>

      <div className="py-3 px-6 flex flex-col gap-3 rounded-md bg-carrotOrange">
        <p className="text-base text-white">
          Get US $10 off with a new supplier
        </p>
        <div className="flex flex-col gap-2">
          <Button className="bg-white text-black">Check out now</Button>
        </div>
      </div>

      <div className="py-3 px-6 flex flex-col gap-3 rounded-md bg-quoteCyalin">
        <p className="text-base text-white">
          Send quotes with supplier preferences
        </p>
      </div>
    </>
  );
};
