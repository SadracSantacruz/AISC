import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import projects from "@/lib/projects.json";

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-between px-4 py-24 md:py-32 text-white">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#418099] leading-snug max-w-4xl">
            Technology could benefit or hurt people, so the usage of tech is the
            responsibility of humanity as a whole, not just the discoverer. I am
            a person before I'm an AI technologist.
          </h1>
          <p className="text-right text-base md:text-lg text-white/70 italic">
            — Fei-Fei Li
          </p>
        </div>
        <p className="mt-16 text-base md:text-lg italic text-white/80 max-w-2xl text-right self-end">
          Take a look at our local efforts…
        </p>
      </section>
      <section className="space-y-24 mt-12">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="flex-1 text-white max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h2>
                <p className="mb-4 text-white/90">{project.description}</p>
                <p className="mb-4 text-sm text-white/70">
                  Contributors: {project.contributors.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  VIEW GITHUB
                </a>
              </div>
              <div className="flex-1 w-full max-w-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
