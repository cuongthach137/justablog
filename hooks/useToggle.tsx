import { useState } from "react";

const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState<any>(defaultValue);
  function toggleValue(val: any): void {
    setValue((curr: any) => (typeof val === "boolean" ? val : !curr));
  }
  return [value, toggleValue];
};

export default useToggle;
