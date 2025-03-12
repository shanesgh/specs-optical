"use client";

import Link from "next/link";
import { CgInstagram } from "react-icons/cg";
import { FaTiktok, FaFacebook } from "react-icons/fa";
import { useModal } from "@/hooks/use-modal";

type SocialLink = {
  social: string;
  url: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
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
  {
    social: "facebook",
    url: "https://www.facebook.com/profile.php?id=61564844338955&mibextid=ZbWKwL",
    icon: (
      <FaFacebook className="size-6 hover:text-red-700 hover:animate-pulse hover:scale-105 transition-all ease-in duration-150" />
    ),
  },
];

const companyLinks: string[] = ["About Us", "Book Appointment"];
const usefulLinks: string[] = [
  "Terms of Service",
  "Privacy Policy",
  "Storage Policy",
];
const highlights: { icon: JSX.Element; text: string }[] = [
  {
    icon: (
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
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    text: "QUINTESSENTIAL CUSTOMER SERVICE",
  },
  {
    icon: (
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
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    ),
    text: "QUALITY PRODUCTS",
  },
  {
    icon: (
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
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z"
        />
      </svg>
    ),
    text: "OUTSTANDING SUPPORT",
  },
];

const Footer = () => {
  const { handleOpen } = useModal();

  return (
    <footer className="text-blue-950/80 mt-4 bg-gray-400 ring-1 ring-blue-950 ">
      <div className="container mx-auto md:px-6 lg:px-40 px-8 pb-4 md:pb-2 pt-6 ">
        <div className="flex flex-col md:flex-row justify-between md:gap-4 ">
          <div className=" md:mb-0 mb-3">
            <div className="text-3xl tracking-widest">
              Specs Optical and Eyewear
            </div>
            <p className="text-md mt-1 font-light">
              1 Boodoo Trace, S.S. Erin Rd, Debe
            </p>

            <div className="mt-4 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12251.028219503076!2d-61.4492713!3d10.1909011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c358fd7d7823da3%3A0x9aa169219a0918a1!2sSpecs%20Optical%20and%20Eyewear!5e1!3m2!1sen!2stt!4v1731757127583!5m2!1sen!2stt"
                width="100"
                height="50"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-lg shadow-md"
              ></iframe>
            </div>
            <p className="mt-2">FIND US ON SOCIAL MEDIA</p>
            <div className="flex space-x-4 pt-1 pb-3">
              {socialLinks.map((item) => (
                <Link key={item.social} target="_blank" href={item.url}>
                  <span className="sr-only">{item.social}</span>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  md:mt-0 md:space-x-4 space-y-4 md:space-y-0">
            <div className="">
              <h3 className="font-bold mb-3">COMPANY</h3>
              <ul className="space-y-2 mb-1">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpen(item.toLowerCase().replace(/ /g, "-"));
                      }}
                      className="hover:underline hover:text-red-700"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-4">USEFUL LINKS</h3>
              <ul className="space-y-2 mb-1">
                {usefulLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpen(item.toLowerCase().replace(/ /g, "-"));
                      }}
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

      <div className="bg-gray-400 mx-auto py-8 border-t border-gray-800">
        <div className="flex flex-wrap justify-around items-center">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center mr-6 mb-4 md:mb-0">
              {item.icon}
              <span className="text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
