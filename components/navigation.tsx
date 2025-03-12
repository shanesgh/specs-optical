import Link from "next/link";
import { Package, Briefcase, Tag, Mail, LucideIcon, House } from "lucide-react";
import cn from "classnames";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import NoDeals from "./nodeals";
import { fetchDeal } from "@/lib/actions";

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
  { name: "PRODUCTS", icon: Package, path: "/products" },
  { name: "SERVICES", icon: Briefcase, path: "/services" },
  { name: "DEALS!", icon: Tag, path: "/deals" },
  { name: "REACH US", icon: Mail, path: "/contact" },
];

const Navigation = ({
  pathname,
  hoveredRoute,
  setHoveredRoute,
}: NavigationProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dealImage, setDealImage] = useState<string | false>(false);
  const [hasDeals, setHasDeals] = useState(false);

  useEffect(() => {
    const clicked = sessionStorage.getItem("dealsClicked");
    if (clicked) {
      setIsClicked(true);
    }

    const fetchDealImage = async () => {
      const deal = await fetchDeal();

      if (deal.image) {
        setDealImage(deal.image.asset.url);
        setHasDeals(true);
      } else {
        setHasDeals(false);
      }
    };

    fetchDealImage();
  }, []);

  const handleClick = (event: React.MouseEvent, name: string) => {
    if (name === "DEALS!") {
      event.preventDefault();
      if (!isClicked) {
        setIsClicked(true);
        sessionStorage.setItem("dealsClicked", "true");
      }
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <div className=" text-white/90 sm:text-blue-950/90 tracking-widest font-semibold text-xl text-center sm:hidden ">
        {hoveredRoute || routes.find((route) => route.path === pathname)?.name}
      </div>
      <nav className=" flex px-2 lg:px-6 xl:px-4 justify-between text-sm lg:w-full xl:justify-around ">
        {routes.map(({ name, icon: Icon, path }) => {
          const isDeals = name === "DEALS!";
          if (isDeals) {
            return (
              <Link
                key={name}
                href="#"
                passHref
                className="overflow-x-auto scrollbar-hide flex items-center relative group"
                onMouseEnter={() => setHoveredRoute(name)}
                onMouseLeave={() => setHoveredRoute("")}
                onClick={(event) => handleClick(event, name)}
              >
                <div
                  className={cn(
                    "flex items-center relative group px-1 md:px-2 py-2 overflow-hidden text-white sm:text-blue-950",
                    {
                      "text-black": pathname === path,
                    }
                  )}
                >
                  <Icon className="size-6 group-hover:animate-bounce transition-all ease-in-out" />
                  <span className="hidden sm:inline min-w-16 text-left pl-1 whitespace-nowrap">
                    {name}
                  </span>
                  {hasDeals && (
                    <span className="absolute flex h-3 w-3 top-1 right-1.5">
                      <span
                        className={cn(
                          "absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75",
                          {
                            "animate-ping": !isClicked,
                          }
                        )}
                      ></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  )}
                  <span
                    className={cn(
                      "absolute bottom-0 h-0.5 w-3/4 bg-white/90 sm:bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out",
                      {
                        "scale-x-100 left-0 w-full": pathname === path,
                        "left-1/8": pathname !== path,
                      }
                    )}
                  ></span>
                </div>
              </Link>
            );
          } else {
            return (
              <Link
                key={name}
                href={path}
                passHref
                className="overflow-x-auto scrollbar-hide flex items-center relative group"
                onMouseEnter={() => setHoveredRoute(name)}
                onMouseLeave={() => setHoveredRoute("")}
              >
                <div
                  className={cn(
                    "flex items-center relative group px-1 md:px-2 py-2 overflow-hidden text-white sm:text-blue-950",
                    {
                      "text-black": pathname === path,
                    }
                  )}
                >
                  <Icon className="size-6 group-hover:animate-bounce transition-all ease-in-out" />
                  <span className="hidden sm:inline min-w-16 text-left pl-1 whitespace-nowrap">
                    {name}
                  </span>
                  <span
                    className={cn(
                      "absolute bottom-0 h-0.5 w-3/4 bg-white/90 sm:bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out",
                      {
                        "scale-x-100 left-0 w-full": pathname === path,
                        "left-1/8": pathname !== path,
                      }
                    )}
                  ></span>
                </div>
              </Link>
            );
          }
        })}
      </nav>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-xs sm:max-w-sm bg-white/90">
          <DialogHeader>
            <DialogTitle>{hasDeals ? "Special!" : ""}</DialogTitle>
          </DialogHeader>
          {hasDeals ? (
            <Image
              src={dealImage as string}
              alt="Deal Image"
              layout="responsive"
              width={400}
              height={475}
              priority
            />
          ) : (
            <NoDeals />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
