"use client";
import React from "react";
import HouseIcon from "@mui/icons-material/House";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { headerLinks } from "@constants/headerLinks";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CancelIcon from "@mui/icons-material/Cancel";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [drawer, setDrawer] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="">
      <div className="bg-secondary text-white hidden md:block">
        <div className="container flex justify-between">
          <ul className="flex items-center gap-10 py-5">
            <Link href="/">
              <Image src="/logo.svg" width={280} height={60} alt="logo" className="w-44 sm:w-auto lg:w-auto" />
            </Link>
            {headerLinks.map((link, index) => (
              <div key={index} className={`hover:text-primaryLight/70 ${pathname === link.href && "text-primaryLight"}`}>
                <Link href={link.href}>{link.name}</Link>
              </div>
            ))}
          </ul>
          <div className="flex gap-3 items-center">
            <input type="text" placeholder="Search" className=" border-2 focus-visible:outline-none bg-primary focus:border-primaryLight px-5 py-2 rounded-md text-gray-400" />
            <Link href="/" className="hover:bg-primary text-primaryLight flex items-center px-5 text-lg gap-2 cursor-pointer">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
