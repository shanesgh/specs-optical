import { HeaderLogo } from "./headerlogo";
import HeaderNav from "./headernav";
import Promotional from "./promo";
import SearchPanel from "./search-panel";

export const Header = () => {
  return (
    <div className="border-b min-h-32 sticky bg-white shadow-lg top-0 z-40">
      <Promotional />
      <header className=" py-2 lg:px-14">
        <div className=" mx-auto ">
          <div className="w-full ">
            <div className="flex flex-col lg:flex-row space-y-2">
              <HeaderLogo />
              <HeaderNav />
              <SearchPanel />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
