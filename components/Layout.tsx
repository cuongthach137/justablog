import React from "react";
import Head from "next/head";
import useToggle from "../hooks/useToggle";
import SideBar from "./SideBar";
import WeatherWidget from "./WeatherWidget";
import { RiAncientGateFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

type LayoutType = {
  title: string;
  description: string;
  keywords: string;
  children: (values: object) => React.ReactNode;
};

const Layout = ({ title, description, keywords, children }: LayoutType) => {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        <header className="flex justify-between items-center p-4">
          <div className="flex gap-2 text-lg  items-center">
            <Link href="/">
              <div>
                <RiAncientGateFill className="cursor-pointer text-blue-500" />
              </div>
            </Link>
            <div onClick={() => toggleValue()} className="font-semibold">
              Good morning,
            </div>
            <div className="text-gray-500">James</div>
          </div>
          <div className="w-9 h-9 bg-blue-700 rounded-md flex items-center justify-center cursor-pointer text-white">
            <div>
              <AiOutlineSearch />
            </div>
          </div>
        </header>
        <WeatherWidget />
        {!value && children({ toggleValue, value })}
        <SideBar toggleActive={toggleValue} isActive={value} />
        <footer>sdasd</footer>
      </div>
    </>
  );
};

export default Layout;
