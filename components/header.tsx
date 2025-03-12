import { HeaderLogo } from "./headerlogo";
import HeaderNav from "./headernav";
import Promotional from "./promo";
import SearchPanel from "./search-panel";

export const Header = () => {
  return (
    <div
      className="border-b bg-white min-h-24  sticky 
    shadow-lg top-0 z-40 "
    >
      <Promotional />
      <header className="w-full mx-auto lg:px-14 ">
        <div className=" bg-blue-950 justify-center sm:bg-white/90 flex flex-col items-center lg:flex-row space-y-1 pb-1 relative">
          <div className="sm:hidden block absolute top-0  left-0  bg-white/90 py-0.5 pr-2 pl-0.5 text-black rounded-br-full font-mono">
            specs
          </div>
          <div className="sm:block md:hidden hidden absolute bottom-0  left-0  bg-blue-950 py-0.5 pr-2 pl-0.5 text-white/90 rounded-tr-full font-mono">
            specs
          </div>
          <HeaderLogo />
          <HeaderNav />
          <SearchPanel />
        </div>
      </header>
    </div>
  );
};
