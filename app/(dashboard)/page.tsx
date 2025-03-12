import Image from "next/image";
import MainPhoto1 from "@/public/cool.jpg";
import MainPhoto2 from "@/public/cool2.jpg";
import MainPhoto3 from "@/public/cool3.jpg";
import frames from "@/public/frames.jpeg";
import Link from "next/link";
import PuzzleComp from "@/components/puzzle";
import AnimatedTextHome from "@/components/animatedushome";
import AnimatedTest from "@/components/animatedtest";

export default function Home() {
  return (
    <div className="grid md:gap-4 gap-1 xl:gap-6 space-y-6   ">
      <div className="relative w-full h-[410px] ">
        <Image
          src={MainPhoto1}
          alt="Photo of Glasses"
          fill={true}
          placeholder="blur"
          className="object-cover"
        />

        <div className="z-10 text-[40px] font-mono tracking-widest font-thin absolute bottom-0 left-5 w-2/5 hidden lg:block transition duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-red-400 hover:via-yellow-400 hover:to-blue-500 hover:bg-clip-text ease-in-out ">
          SPECS OPTICAL AND EYEWEAR LIMITED
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1 h-[250px] ">
        <div className="h-full hidden sm:relative md:block hover:scale-105 duration-150 ease-in-out ">
          <Image
            src={MainPhoto2}
            alt="Image 1"
            fill={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="bg-blue-950 flex flex-col md:space-y-6 p-4 items-center justify-between py-10 text-white font-serif text-xl tracking-widest md:h-full ">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm sm:text-lg whitespace-nowrap">
              DISCOVER
            </span>
            <span className=" text-sm sm:text-lg whitespace-nowrap">THE</span>
            <span className="text-sm sm:text-lg whitespace-nowrap">
              PERFECT
            </span>
            <span className="text-sm sm:text-lg whitespace-nowrap">PAIR</span>
          </div>
          <Link
            href="/products"
            passHref
            className="flex 
                justify-center 
                px-2
                py-1
                shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
                md:text-md
                lg:text-lg 
                text-sm
                font-semibold 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                active:translate-y-2
                transition-all
                linear
                rounded-2xl
                duration-100
                text-black bg-white/90 hover:scale-105 ease-in focus-visible:outline-black hover:outline-black"
          >
            View Eyewear
          </Link>
        </div>

        <div className="h-full hidden sm:relative md:block hover:scale-105 duration-150 ease-in-out ">
          <Image
            src={MainPhoto3}
            alt="Image 2"
            fill={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] flex justify-center items-center">
        <Image
          src={frames}
          alt="Photo of Glasses"
          placeholder="blur"
          className="object-cover h-full lg:w-3/5"
        />
      </div>
      <PuzzleComp />
      <AnimatedTest />
      <AnimatedTextHome />
    </div>
  );
}
