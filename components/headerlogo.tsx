import Link from "next/link";
import { Glasses } from "lucide-react";

export const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="hidden lg:flex hover:skew-y-3 hover:scale-105 transition-all ease-in-out duration-150"
    >
      <div className="lg:flex items-center text-blue-950 text-2xl pt-1">
        <Glasses className="size-10" />
        <div className="whitespace-nowrap font-semibold pl-1">SPECS CO</div>
      </div>
    </Link>
  );
};
