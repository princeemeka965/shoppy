"use client";

import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState<string>("");
  const onChange = ({ target }: any) => setEmail(target.value);

  return (
    <>
      <div className="lg:px-20 w-full lg:py-3 flex flex-col p-3 bg-grayLyanin">
        <div className="lg:p-5 flex justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-center text-black">
              Subscribe on our newsletter
            </p>
            <p className="text-base">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>

            <div className="flex my-3">
              <div className="relative flex w-full">
                <Input
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  crossOrigin=""
                />
                <Button
                  size="sm"
                  color={"blue"}
                  disabled={!email}
                  className="!absolute right-1 top-1 rounded"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
