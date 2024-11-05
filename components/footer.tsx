import Link from "next/link";
import { CgInstagram } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa"; // Import TikTok icon from react-icons

const Footer = () => {
  return (
    <footer className="text-blue-950/80 mt-4 bg-gray-400 ring-1 ring-blue-950">
      <div className="container mx-auto p-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-extralight tracking-widest ">
              Specs Optical and Eyewear
            </div>
            <p className="mt-4 mb-2">Find us on social media</p>
            <div className="flex space-x-4">
              {[
                {
                  social: "instagram",
                  url: "https://www.instagram.com/specsopticalandeyewear",
                  icon: (
                    <CgInstagram className="size-6 hover:text-red-700 hover:animate-pulse hover:scale-105 transition-all ease-in duration-150" />
                  ),
                },
                {
                  social: "tiktok",
                  url: "https://www.tiktok.com/@specs.optical.and",
                  icon: (
                    <FaTiktok className="size-6 hover:text-red-700 hover:animate-pulse hover:scale-105 transition-all ease-in duration-150" />
                  ),
                },
              ].map((item) => (
                <Link key={item.social} target="_blank" href={item.url}>
                  <span className="sr-only">{item.social}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            <div>
              <h3 className="font-bold mb-4">HELP CENTER</h3>
              <ul className="space-y-2">
                {["How to", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="hover:underline hover:text-red-700"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-4 ">COMPANY</h3>
              <ul className="space-y-2">
                {[
                  "About us",
                  "Book appointment",
                  "Contact",
                  "Return and Exchange",
                ].map((item) => (
                  <li key={item} className="">
                    <Link
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:underline hover:text-red-700"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2">
                {[
                  "Terms of Use",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Cookie Settings",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="hover:underline hover:text-red-700"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 mx-auto py-6 mt-12 border-t border-gray-800">
        <div className="flex flex-wrap justify-around items-center">
          {[
            { icon: "M5 13l4 4L19 7", text: "QUINTESSENTIAL CUSTOMER SERVICE" },
            {
              icon: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
              text: "QUALITY PRODUCTS",
            },
            {
              icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z",
              text: "OUTSTANDING SUPPORT",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center mr-6 mb-4 md:mb-0">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              <span className="text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
