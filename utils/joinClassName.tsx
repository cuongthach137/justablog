export const joinClx = (...clx: string[]) => {
  return clx.filter(Boolean).join(" ");
};
