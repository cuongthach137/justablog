import { AiOutlineHome } from "react-icons/ai";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoBusinessOutline } from "react-icons/io5";
import { MdSportsTennis } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { BiJoystickAlt } from "react-icons/bi";

export const menuItems = [
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
