import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <div className=" fixed -top-64 -z-10 -right-64">
        <Image 
          src="/bg.png" 
          alt="background-image"
          width={800}
          height={800}
        ></Image>
      </div>
      <section>
        <h1>POSER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eleifend placerat pellentesque
          turpis mi porttitor in quam. Urna faucibus fusce accumsan viverra
          eget. Tempus vitae eget accumsan adipiscing quis scelerisque ut
          elementum mattis. Pharetra quis a id pharetra. A tortor tincidunt sed
          vel semper. Sed lorem ultrices diam nec a nisl sed lorem.
        </p>
      </section>
      <section>
        <button>sdfsdf</button>
        <button>sdfsdf</button>
        <button>sdfsdf</button>
        <button>sdfsdf</button>
      </section>
    </main>
  );
}
