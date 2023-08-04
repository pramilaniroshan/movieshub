import Link from "next/link";
import React from "react";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { headerLinks } from "@constants/headerLinks";
import HouseIcon from "@mui/icons-material/House";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="bg-secondary py-20 md:px-10 lg:px-20 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container">
          <div>
            <div className="text-xl">About MovieHub</div>
            <div className="mt-3 text-gray-400">MovieHub is a free service that allows you to track and rate your favorite movies and TV shows, create a watchlist, and get suggestions on what to watch next. Click here to learn more.</div>
            <div className="mt-10 flex gap-3">
              <Link href={"/"} className="border border-gray-400 w-10 h-10 vhcenter">
                <Image width="9" height="16" src="/facebook.png" alt="facebook" />
              </Link>
              <Link href={"/"} className="border border-gray-400 w-10 h-10 vhcenter">
                <Image width="17" height="14" src="/twitter.png" alt="twitter" />
              </Link>
              <Link href={"/"} className="border border-gray-400 w-10 h-10 vhcenter">
                <Image width="15" height="14" src="/linkedin.png" alt="linkedin" />
              </Link>
              <Link href={"/"} className="border border-gray-400 w-10 h-10 vhcenter">
                <Image width="15" height="15" src="/instagram.png" alt="instagram" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:items-center">
            <div>
              <div className="text-xl">Quick Links</div>
              <div className="mt-5 space-y-5 text-gray-400">
                {headerLinks.map((link, index) => (
                  <div className="flex gap-3 items-center" key={link.name}>
                    <FolderOutlinedIcon className="text-xl" />
                    <Link href={link.href}>{link.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex lg:items-center flex-col">
            <div>
              <div className="text-xl">Legal</div>
              <div className="mt-5 space-y-3 text-gray-400">
                <div>
                  <Link href={"/terms&conditions"}>Terms & Conditions</Link>
                </div>
                <div>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>
                </div>
                <div>
                  <Link href={"/about"}>About Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary  py-5 text-gray-400">
        <div className="container">
          <div className="text-sm md:text-base">© 2023 TheTVDB.com ®, A Whip Media Company. ALL RIGHTS RESERVED. </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
