import Image from "next/image";
import MainPhoto1 from "@/public/cool.jpg";
import MainPhoto2 from "@/public/cool2.jpg";
import MainPhoto3 from "@/public/cool3.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid lg:grid-rows-3 gap-4">
      <div className="relative w-full h-[390px]">
        <Image
          src={MainPhoto1}
          alt="Photo of Glasses"
          fill={true}
          placeholder="blur"
          className="object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <div className="relative h-[150px] md:h-full">
          <Image
            src={MainPhoto2}
            alt="Image 1"
            fill={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="bg-blue-950 flex flex-col space-y-6 p-4 items-center justify-between py-10 text-white font-serif text-xl tracking-widest md-h-[150px] h-full">
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

        <div className=" relative md:h-full h-[150px]">
          <Image
            src={MainPhoto3}
            alt="Image 2"
            fill={true}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative place-items-center">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gray-500/20 z-20 hidden md:block"></div>

        <div className="w-full relative h-[300px] m-3 ">
          <div className=" flex animate-pulse items-center justify-center h-full ">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 760 350"
              preserveAspectRatio="none"
            >
              <path id="curve" d="M50,300 Q400,50 750,300" fill="transparent" />
              <text width="700">
                <textPath
                  href="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                  className="text-4xl font-bold fill-current text-blue-500 hover:text-red-500 transition-colors duration-500"
                >
                  Where Your Vision Finds Clarity
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 bg-gray-300 px-2 sm:px-6 md:px-12 w-4/5 py-2 rounded-xl mx-auto">
        <span className="md:text-md text-wrap bg-gray-400 text-blue-950 font-mono">
          At Specs Optical and Eyewear, we are committed to making fashionable,
          top-notch glasses available to everyone. Our extensive selection
          includes both prescription eyeglasses and sunglasses, designed to
          complement every style and requirement. We offer personalized eye
          exams and expert fittings to ensure your eyewear not only enhances
          your appearance but also provides the best vision possible. With our
          highly available whatsapp chat getting the perfect pair of glasses has
          never been easier. From our facility to your home, we strive to
          fulfill all your optical needs with outstanding service.
        </span>
      </div>
    </div>
  );
}
