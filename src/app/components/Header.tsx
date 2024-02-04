"use client";

import {
  CartIcon,
  LogoIcon,
  MessageIcon,
  OrderIcon,
  ProfileIcon,
} from "@/icons";
import { SET_USER } from "@/reducers/usersDataSlice";
import { RootState } from "@/store/store";
import {
  Typography,
  Navbar,
  IconButton,
  Collapse,
  Input,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props: any) {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const userData = useSelector((state: RootState) => state.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const emitSignUp = (data: Boolean) => {
    props.activateSignUp(data);
  };

  const emitLogin = (data: Boolean) => {
    props.activateLogin(data);
  };

  const signOut = () => {
    dispatch(SET_USER({}));
  };

  const navList = (
    <ul className="mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {Object.keys(userData).length > 0 ? (
        <>
          <div className="flex gap-1 lg:hidden md:hidden">
            <ProfileIcon />
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="#" className="flex items-center text-black">
                {userData.name}
              </a>
            </Typography>
          </div>
          <div className="lg:flex md:flex hidden gap-1">
            <Menu>
              <MenuHandler>
                <div className="flex cursor-pointer gap-2">
                  <Avatar
                    variant="circular"
                    size="xs"
                    alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />
                  <div className="flex flex-col justify-center">
                    <Typography
                      as="li"
                      variant="small"
                      className="p-1 text-black font-normal"
                    >
                      {userData.name}
                    </Typography>
                  </div>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  className="flex items-center gap-2 "
                  onClick={() => signOut()}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                      fill="#90A4AE"
                    />
                  </svg>
                  <Typography variant="small" className="font-medium">
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex gap-1">
            <MessageIcon />
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="#" className="flex items-center text-black">
                Messages
              </a>
            </Typography>
          </div>
          <div className="flex gap-1">
            <OrderIcon />
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="#" className="flex items-center text-black">
                Orders
              </a>
            </Typography>
          </div>
          <div className="flex gap-1">
            <CartIcon />
            <Typography as="li" variant="small" className="p-1 font-normal">
              <a href="#" className="flex items-center text-black">
                My Cart
              </a>
            </Typography>
          </div>
          <div className="flex gap-1 lg:hidden md:hidden">
            <div className="flex">
              <Button className="bg-white text-black">Logout</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-3">
          <div className="flex">
            <Button color="blue" onClick={() => emitSignUp(true)}>
              Sign Up
            </Button>
          </div>
          <div className="flex">
            <Button
              className="bg-white text-black"
              onClick={() => emitLogin(true)}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </ul>
  );

  return (
    <div className="h-max w-full fixed" style={{ zIndex: 9 }}>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <LogoIcon />
            <Link
              href="/"
              className="mr-4 cursor-pointer py-1.5 font-medium text-black"
            >
              Shoppy
            </Link>
          </div>
          <div className="relative lg:flex md:flex hidden w-1/3 z-5">
            <Input
              type="email"
              placeholder="Search Shoppy"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin=""
            />
            <Button
              size="sm"
              color={"blue"}
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="w-full border my-2" />
          {navList}
        </Collapse>
      </Navbar>
    </div>
  );
}
