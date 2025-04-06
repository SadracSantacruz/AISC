import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";

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

      <section className="flex flex-col md:flex-row justify-between items-center text-white px-6 md:px-20 py-20 gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-lg leading-relaxed">
          <p>
            AI is playing an ever increasing role in our lives, and its impact
            continues to spread outside of just the tech industry.
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="md:w-1/2 text-right">
          <p className="text-9xl font-bold">91%</p>
          <p className="text-xl text-blue-200 mb-6">OF TECH EXECUTIVES</p>
          <p className="text-9xl font-bold">84%</p>
          <p className="text-xl text-blue-200 mb-4">OF THE PUBLIC</p>
          <p className="text-2xl font-bold text-blue-300 leading-tight">
            BELIEVE THAT AI WILL <br />
            CONSTITUTE THE NEXT <br />
            <span className="italic font-extrabold">
              REVOLUTION IN TECHNOLOGY
            </span>
          </p>
        </div>
      </section>

      {/* Bottom Justification Text */}
      <section className="text-white px-6 md:px-20 pb-16 text-left text-xl font-normal leading-relaxed">
        <p>
          Given that, it’s important for everyone to be AI literate, and
          understand the capabilities of this technology instead of succumbing
          to fear and misinformation.
        </p>
      </section>

      <section className="text-white px-6 md:px-20 py-24">
        <div className="flex justify-center items-end gap-4 mb-10">
          <h2
            className="text-[200px] font-black leading-none"
            style={{ color: "#20CCF124" }}
          >
            YET
          </h2>
          <h2
            className="text-[100px] font-black leading-none mb-6"
            style={{ color: "#20CCF124" }}
          >
            ONLY
          </h2>
        </div>

        <div className="flex flex-col items-end text-right gap-8">
          <p className="text-lg">
            <span className="inline-flex items-end gap-2">
              <span className="text-5xl">♀️♂️♂️</span>
              <span className="text-5xl font-bold text-white">1 IN 3</span>
            </span>{" "}
            <span className="text-purple-300 text-xl font-normal">
              of those in data and AI roles are women
            </span>
          </p>

          <p className="text-8xl font-bold text-white">
            5%{" "}
            <span className="text-purple-300 text-xl font-normal">
              of PhD candidates for AI are black or hispanic
            </span>
          </p>

          <p className="text-8xl font-bold text-white">
            16%{" "}
            <span className="text-purple-300 text-xl font-normal">
              of Americans are literate in AI
            </span>
          </p>
        </div>

        <p className="text-center mt-12 text-xl font-normal text-gray-300">
          Not everyone has the means to become AI literate, whether it's due to
          a lack of resources, opportunities, or time.
        </p>
      </section>

      <section className="text-white px-6 md:px-20 py-24">
        <p className="text-3xl md:text-5xl font-light leading-relaxed mb-12 max-w-5xl">
          AISC @ UCSD wants to change that by providing{" "}
          <span className="italic text-pink-400 font-semibold">
            accessible AI literacy
          </span>{" "}
          for students, equipping them to enter the changing workforce and
          world.
        </p>
        <p className="italic text-gray-300 text-xl">
          See how we’ve been working towards that…
        </p>
      </section>

      <section
        className="relative text-white px-6 md:px-20 py-32"
        style={{
          // Insert background image here
          backgroundImage: "url('/08EF74E8-9953-4003-BB54-202E0D124B60.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-black text-sky-400 mb-8 leading-tight">
            THE GRADE <br /> SCHOOL <br /> INITIATIVE
          </h2>
          <p className="italic text-xl text-white mb-8">
            Exploring the power of AI with students <br /> in underrepresented
            communities.
          </p>

          {/* I think this button should redirect you to the Initiatives page */}
          <Button text="READ MORE" href="/grade-school-initiative" size="lg" />
        </div>
      </section>

      <section>
        <Carousel />
        <div className="flex justify-center mt-8">
          <Button text="READ MORE" href="/events" size="md" />
        </div>
      </section>
      <Footer />
    </>
  );
}
