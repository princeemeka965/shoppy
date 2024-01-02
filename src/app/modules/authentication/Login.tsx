"use client";
import { SET_USER } from "@/reducers/usersDataSlice";
import { useLoginMutation } from "@/services";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Login(props: any): ReactNode {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
    props.deactivateLogin(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginAccount, {}] = useLoginMutation();

  const submitData = async (data: any) => {
    setLoading(true);
    try {
      // Call the mutation hook with the form data
      const result: any = await loginAccount(data);

      // Handle the result as needed (e.g., check result.data, etc.)
      props.deactivateLogin(true);
      result.error
        ? toast.error(result.error.data.message)
        : toast.success(result.data.message, { autoClose: 3000 });

      const stateData = {
        name: result.data.userData[0].name,
        username: result.data.userData[0].username,
      };

      dispatch(SET_USER(stateData));
      setLoading(false);
    } catch (error: any) {
      // Handle error (e.g., show error message)
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <form
          className="mt-3 mb-2 w-full px-4 font-sans"
          onSubmit={handleSubmit((data) => submitData(data))}
        >
          <DialogBody>
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Login
              </Typography>
              <Typography color="gray" className="my-2 font-normal">
                Welcome back to Shoppy!
              </Typography>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Username
                </Typography>
                <Input
                  size="lg"
                  placeholder="Enter Username"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.username as any).message}
                  </p>
                ) : null}

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={""}
                  {...register("password", {
                    required: "Passoword is required",
                  })}
                />
                {errors.password ? (
                  <p className="-mt-4 text-red-700">
                    {(errors.password as any).message}
                  </p>
                ) : null}
              </div>
            </Card>{" "}
          </DialogBody>
          <DialogFooter>
            <Button color="blue" fullWidth type="submit" disabled={isLoading}>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Do not have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
