import Link from "next/link";
import {
  Info,
  Package,
  Briefcase,
  Tag,
  Mail,
  LucideIcon,
  House,
} from "lucide-react";
import cn from "classnames";

type Route = {
  name: string;
  icon: LucideIcon;
  path: string;
};

type NavigationProps = {
  pathname: string;
  hoveredRoute: string;
  setHoveredRoute: (route: string) => void;
};

const routes: Route[] = [
  { name: "HOME", icon: House, path: "/" },
  { name: "WHY US", icon: Info, path: "/why-us" },
  { name: "PRODUCTS", icon: Package, path: "/products" },
  { name: "SERVICES", icon: Briefcase, path: "/services" },
  { name: "DEALS!", icon: Tag, path: "/deals" },
  { name: "GET IN TOUCH", icon: Mail, path: "/contact" },
];

const Navigation = ({
  pathname,
  hoveredRoute,
  setHoveredRoute,
}: NavigationProps) => (
  <>
    <div className="text-blue-950/90 tracking-widest font-semibold text-xl text-center sm:hidden">
      {hoveredRoute || routes.find((route) => route.path === pathname)?.name}
    </div>
    <nav className="flex px-2 lg:px-6 xl:px-2 justify-between text-sm lg:w-full ">
      {routes.map(({ name, icon: Icon, path }) => (
        <Link
          key={name}
          href={path}
          className="overflow-x-auto scrollbar-hide flex items-center relative group"
          onMouseEnter={() => setHoveredRoute(name)}
          onMouseLeave={() => setHoveredRoute("")}
        >
          <div
            className={cn(
              "flex items-center relative group px-1 md:px-2 py-2 overflow-hidden",
              {
                "text-black": pathname === path,
                "lg:hidden": name === "HOME",
              }
            )}
          >
            <Icon className="size-6 text-blue-950 group-hover:animate-bounce transition-all ease-in-out" />
            <span className="hidden sm:inline min-w-16 text-left pl-1 whitespace-nowrap">
              {name}
            </span>
            <span
              className={cn(
                "absolute bottom-0 h-0.5 w-3/4 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out",
                {
                  "scale-x-100 left-0 w-full": pathname === path,
                  "left-1/8": pathname !== path,
                }
              )}
            ></span>
          </div>
        </Link>
      ))}
    </nav>
  </>
);

export default Navigation;
