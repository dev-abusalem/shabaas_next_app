"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header className=" min-h-[60px] sticky top-0 bg-white z-10 ">
      <Container>
        <div className="md:flex justify-between items-center gap-5 pt-[7px]">
          <div className="logo flex justify-between items-center">
            <div>
              <Link href="/">
                {" "}
                <Image width={170} alt="logo" src={logo} />
              </Link>
            </div>
            <div className="md:hidden block cursor-pointer">
              {showMenu ? (
                <AiOutlineClose
                  className="border-2 border-black text-4xl p-2 rounded-md text-primary"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <FaBars
                  className="border-2 border-black text-4xl p-2 rounded-md text-primary "
                  onClick={() => setShowMenu(!showMenu)}
                />
              )}
            </div>
          </div>

          <nav className={showMenu ? "block" : " hidden md:block"}>
            <ul className="md:flex py-3 md:py-0 items-center justify-end gap-10">
              <li>
                <Link
                  href="/"
                  className=" block md:inline-block  p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#consumer"
                  className="block md:inline-block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary"
                >
                  Consumer
                </Link>
              </li>
              <li
                className="relative cursor-pointer p-1 border-b-2 border-transparent duration-150 show_subMenu_li hover:text-primary hover:border-primary"
                onMouseLeave={() => setShowSubMenu(!showSubMenu)}
              >
                <span className="flex justify-between items-center">
                  Merchant
                  <span>
                    <IoIosArrowUp className="inline-block arrow_up_li ml-3 " />
                    <IoIosArrowDown className="inline-block ml-3 arrow_down_li " />
                  </span>
                </span>

                <ul className="show_subMenu_ul_wrapper rounded-md shadow-lg duration-100 absolute bg-white right-0 w-[200px] p-3">
                  <li>
                    <Link
                      href="/#merchant"
                      className="  text-black block  p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary"
                    >
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/merchant/onboard"
                      className=" text-black block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary"
                    >
                      Onboard
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block md:inline-block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
