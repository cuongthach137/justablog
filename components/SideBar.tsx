import React, { useEffect } from "react";
import { joinClx } from "../utils/joinClassName";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { AiOutlineHome } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoBusinessOutline } from "react-icons/io5";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiJoystickAlt } from "react-icons/bi";
import Image from "next/image";

const menuItems = [
  {
    name: "Home",
    component: "",
    location: "/",
    icon: AiOutlineHome,
  },
  {
    name: "International",
    component: "",
    location: "/international",
    icon: GiAirplaneDeparture,
  },
  {
    name: "Business",
    component: "",
    location: "/business",
    icon: IoBusinessOutline,
  },
  {
    name: "Sports",
    component: "",
    location: "/sports",
    icon: MdSportsTennis,
  },
  {
    name: "Health",
    component: "",
    location: "/health",
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: "Entertainment",
    component: "",
    location: "/entertainment",
    icon: BiJoystickAlt,
  },
];

type SideBarType = {
  isActive: boolean;
  toggleActive: (a: boolean | undefined) => void;
};

const SideBar = ({ isActive, toggleActive }: SideBarType) => {
  const sideBarClx = joinClx(
    " transition-transform p-7 absolute inset-0 bg-white z-20 lg:px-[50rem] lg:grid lg:items-center lg:py-20",
    isActive ? "translate-x-0" : "translate-x-[-100%] transition-transform"
  );
  const { query, asPath } = useRouter();
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isActive) {
        toggleActive(false);
      }
    });
    return () => document.removeEventListener("keydown", () => {});
  });
  return (
    <aside className={sideBarClx}>
      {/* user info */}
      <div className="mb-8 ">
        <div>
          <Image
            className="rounded-full w-14 h-14 object-cover mb-2"
            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t31.18172-8/24883656_138190423624150_8382249765869204198_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=vkg3oGbAzXMAX9asSHG&_nc_oc=AQkD5IM-gcAuuDll6XU7AfEAyaaVPE6Nm2EPntKkErrrZCbxalZeobZaNmgqIvEIpffqAPUaNjhqFfTV_bMBjikY&_nc_ht=scontent.fhan14-1.fna&oh=710d2511fe83fc7bde3712f32c62ecad&oe=61CBE0BC"
            alt=""
          />
        </div>
        <div className=" font-semibold">Feb 02, 2020</div>
        08:43 am
      </div>
      {/* sections */}
      {menuItems.map((menu) => {
        const isActiveNav =
          query?.sectionId === menu.name.toLowerCase() ||
          asPath === menu.location;

        const goToPage = menu.name === "Home" ? "/" : `${menu.location}`;

        return (
          <div key={menu.name}>
            <Link href={goToPage}>
              <div
                onClick={() => toggleActive(undefined)}
                className="flex h-10 items-center justify-between mb-6 cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="bg-blue-500 rounded-md p-1 text-white w-9 h-9 flex items-center justify-center">
                    {<menu.icon />}
                  </span>
                  <span className="ml-5">{menu.name}</span>
                </div>
                {isActiveNav && (
                  <span className="bg-blue-500 w-2 h-2 rounded-full" />
                )}
              </div>
            </Link>
          </div>
        );
      })}
      {/* Promotional stuff */}
      <div className=" rounded-2xl bg-blue-500 h-28 w-full p-3 text-white flex gap-4">
        <div>
          <div>Neews in a box</div>
          <div className=" text-blue-400">You can do it!</div>
          <button className="bg-blue-700 w-full p-1 mt-2 rounded-md">
            Upgrade
          </button>
        </div>
        <div>The box</div>
      </div>
    </aside>
  );
};

export default SideBar;
