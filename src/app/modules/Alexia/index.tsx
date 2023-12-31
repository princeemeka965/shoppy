"use client";

import { greetings } from "@/helpers/greetings";
import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect, Fragment } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCQP7r3dQl7bECxGTQQu-BwEyZ_c9LKjKc");

export default function Alexia() {
  const [open, setOpen] = useState<boolean>(true);
  const [alexiaChat, setResponse] = useState<any>([]);
  const [myResponse, setMyResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const userData = useSelector((state: RootState) => state.userData.user);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const msg = `Good ${greetings()} Alexia, my AI shopping assistance, my name is ${
      userData.name
    }`;
    fetchData(msg);
  }, [userData.name]);

  const fetchData = async (promptMessage: any) => {
    setLoading(true);
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const msg = promptMessage;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const formattedText = response
      .text()
      .split("\n")
      .map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ));
    alexiaChat.push({
      name: "Alexia",
      message: [...formattedText],
    });
    setResponse(alexiaChat);
    if (response.text().length > 0) setLoading(false);
  };

  const handleInput = (data: string) => {
    setMyResponse(data);
  };

  const submitResponse = () => {
    alexiaChat.push({
      name: `User`,
      message: myResponse,
    });
    fetchData(myResponse);
    setMyResponse("");
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Chat with Alexia
            </Typography>
            <hr className="my-2 border-blue-gray-50" />
            <div
              className="mb-1 flex flex-col h-[550px] gap-5"
              style={{ overflowY: "auto" }}
            >
              {alexiaChat.map((chat: any, index: number) =>
                chat.name === "Alexia" ? (
                  <div className="w-full flex justify-start" key={index}>
                    <div className="flex w-3/4 gap-2">
                      <Card className="p-3 mx-1">
                        <p className="text-sm font-medium">
                          {loading ? "Alexia is typing..." : chat.message}
                        </p>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex" key={index}>
                    <div className="flex flex-grow w-full" />
                    <div className="flex w-3/4 gap-2">
                      <Card className="p-3 mx-1 bg-blue-100">
                        <p className="text-sm font-medium">{chat.message}</p>
                      </Card>
                    </div>
                  </div>
                )
              )}
            </div>
            <hr className="my-2 border-blue-gray-50" />
            <DialogFooter>
              <div className="flex w-full gap-2">
                <Input
                  size="lg"
                  placeholder="Send a message to Alexia"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={myResponse}
                  crossOrigin={""}
                  onChange={(e) => handleInput(e.target.value)}
                />
                <Button
                  color="blue"
                  disabled={myResponse.length === 0}
                  onClick={() => submitResponse()}
                >
                  Send
                </Button>
              </div>
            </DialogFooter>
          </Card>
        </DialogBody>
      </Dialog>
    </>
  );
}
