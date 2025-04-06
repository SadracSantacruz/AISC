import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center text-white px-4 py-24">
        <Image
          src="/3DCubeLogo.png"
          alt="AISC Logo"
          width={400}
          height={400}
          className="mb-8 animate-[float_3s_ease-in-out_infinite]"
        />
        <h1 className="text-2xl md:text-3xl font-bold tracking-widest mb-2">
          ARTIFICIAL INTELLIGENCE STUDENT COLLECTIVE
        </h1>
        <p className="text-sm md:text-base text-gray-300 mb-4">
          Powered by Humans For AI
        </p>
        <p className="text-base md:text-lg">
          Creating a future of AI literacy for all.
        </p>
      </section>
    </>
  );
}
