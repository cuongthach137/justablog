import React, { useEffect, useRef } from "react";
import Head from "next/head";
import useToggle from "../hooks/useToggle";
import SideBar from "./SideBar";
import WeatherWidget from "./Widgets/WeatherWidget";
import { RiAncientGateFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import Link from "next/link";

type LayoutType = {
  title: string;
  description: string;
  keywords: string;
  children: (values: object) => React.ReactNode;
};

const Layout = ({ title, description, keywords, children }: LayoutType) => {
  const [value, toggleValue] = useToggle(false);
  const navRef = useRef();
  const arrowUpRef = useRef();
  useEffect(() => {
    let lastPos = window.scrollY;
    //all i see is red
    document.addEventListener("scroll", function () {
      let latestPos = window.scrollY;
      if (!navRef.current) return;
      if (!arrowUpRef.current) return;
      if (window.scrollY > innerHeight) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        arrowUpRef.current.classList.remove("hidden");
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        arrowUpRef.current.classList.add("hidden");
      }

      if (latestPos < lastPos) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navRef.current.style.position = "sticky"; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        navRef.current.style.top = "0"; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        navRef.current.style.transform = "translateY(0rem)"; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        navRef.current.style.position = "static"; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
      }
      lastPos = latestPos;
    });
    return document.removeEventListener("scroll", () => {});
  }, []);

  function scrollToView() {
    if (!navRef.current) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navRef.current.style.position = "static";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navRef?.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        <nav
          ref={navRef}
          className="flex justify-between items-center p-4 w-full bg-white transition-all  z-20"
        >
          <div className="flex gap-2 text-lg  items-center">
            <Link href="/">
              <div>
                <RiAncientGateFill className="cursor-pointer text-blue-500" />
              </div>
            </Link>
            <div onClick={() => toggleValue()} className="font-semibold">
              Hi,
            </div>
            <div className="text-gray-500">Champ!</div>
          </div>
          <div className="w-9 h-9 bg-blue-700 rounded-md flex items-center justify-center cursor-pointer text-white">
            <div>
              <AiOutlineSearch />
            </div>
          </div>
        </nav>
        <WeatherWidget />
        {!value && children({ toggleValue, value })}
        <SideBar toggleActive={toggleValue} isActive={value} />
        <footer className="bg-blue-700 mt-10 lg:text-center text-white py-5 text-xs lg:text-base">
          <p className=" px-4 mb-3">
            Most of the articles on this website are straight copies from The
            Verge. The name of the author for each article is fictional and does
            not associate with any particlar individual. The whole website is
            built for educational purposes only
          </p>
          <div className="flex justify-center cursor-pointer ">
            <Link href="https://github.com/cuongthach137">
              <div className="flex items-center gap-2">
                <div>Cuong Thach </div> <BsGithub />
              </div>
            </Link>
          </div>
        </footer>
        <div
          ref={arrowUpRef}
          onClick={scrollToView}
          className="fixed bottom-5 right-5 text-blue-500 text-4xl cursor-pointer hidden"
        >
          <BsArrowUpCircle />
        </div>
      </div>
    </>
  );
};
Layout.defaultProps = {
  title: "News in a box",
  description: "Your most up to date and unbiased news source",
  keywords: "sexy busty tits steamy smoking hot moist",
};
export default Layout;
