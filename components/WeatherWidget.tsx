import React from "react";
import useToggle from "../hooks/useToggle";
import { joinClx } from "../utils/joinClassName";
import { WiDayCloudy } from "react-icons/wi";

const WeatherWidget = () => {
  const [value, toggleValue] = useToggle(true);
  const wdg = joinClx(
    "p-4",
    value
      ? "w-full  shadow-xl mb-5 relative"
      : "flex justify-between h-8 w-full"
  );
  const wiDayCloudy = joinClx(
    "text-3xl absolute",
    value
      ? "translate-y-5 opacity-0 transition-transform "
      : "translate-y-0 opacity-1 transition-transform cursor-pointer relative"
  );

  return (
    <div className={wdg}>
      <>
        <div className="w-1" />
        <div
          className={wiDayCloudy}
          onClick={() => {
            toggleValue(true);
          }}
        >
          <WiDayCloudy />
        </div>
      </>

      {value && (
        <>
          <div
            onClick={() => {
              toggleValue(false);
            }}
            className="rounded-full border-2 absolute right-5 top-3 w-3 h-3 border-blue-300 cursor-pointer "
          />
          <div className="gap-5 flex ">
            <div>
              <div>Icon</div>
              <div className="font-semibold">Hanoi</div>
            </div>
            <div>
              <div className="font-semibold">28 C </div>
              <div className="text-gray-500">Cloudy day, chances of rain</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
