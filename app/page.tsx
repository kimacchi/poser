import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col md:p-24 p-8 items-center md:items-start md:justify-between md:gap-0 gap-24 h-full">
      <div className="fixed md:-top-64 -z-10 md:-right-64 -bottom-16 ">
        <Image
          src="/bg.png"
          alt="background-image"
          width={800}
          height={800}
        ></Image>
      </div>
      <section className="md:w-2/5 w-full font-mono flex flex-col gap-4">
        <h1 className=" text-6xl">POSER</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Eleifend placerat pellentesque
          turpis mi porttitor in quam. Urna faucibus fusce accumsan viverra
          eget. Tempus vitae eget accumsan adipiscing quis scelerisque ut
          elementum mattis. Pharetra quis a id pharetra. A tortor tincidunt sed
          vel semper. Sed lorem ultrices diam nec a nisl sed lorem.
        </p>
      </section>

      
      <section className="md:w-2/5 w-full grid grid-rows-2 grid-cols-2 md:h-80 h-64 gap-4">
        <Link 
          href={"/body-poses"} 
          className="transition-all hover:scale-105 shadow-inner h-full rounded-tr-[5rem] rounded-bl-[5rem] bg-darkGradient flex items-center justify-center"
        >
          sdfsdf
        </Link>
        <Link 
          href="/" 
          className="transition-all hover:scale-105 shadow-inner h-full rounded-tr-[5rem] rounded-tl-[5rem] rounded-br-[5rem] bg-lightGradient-lb-rt flex items-center justify-center"
        >
          sdfsdf
        </Link>
        <Link 
          href="/" 
          className="transition-all hover:scale-105 shadow-inner h-full rounded-tl-[5rem] rounded-bl-[5rem] rounded-br-[5rem] bg-lightGradient-rt-lb flex items-center justify-center"
        >
          sdfsdf
        </Link>
        <Link 
          href="/" 
          className="transition-all hover:scale-105 shadow-inner h-full rounded-tr-[5rem] rounded-bl-[5rem] rounded-br-[5rem] bg-lightGradient-lt-rb flex items-center justify-center"
        >
          sdfsdf
        </Link>
      </section>
    </main>
  );
}
