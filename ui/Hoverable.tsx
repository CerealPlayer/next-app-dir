import { CommonProps } from "../types/commons";

export function Hoverable({ children }: CommonProps) {
  return (
    <span className="p-4 rounded-xl dark:hover:bg-slate-300 hover:bg-slate-500 hover:bg-opacity-30 transition-all duration-200 ease-out">
      {children}
    </span>
  );
}
