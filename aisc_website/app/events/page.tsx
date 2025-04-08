"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import events from "@/lib/events.json";
import { useState, useEffect, Fragment } from "react";

export default function EventsPage() {
  const [openCategory, setOpenCategory] = useState("");
  useEffect(() => {
    const priorities = ["Happening", "Upcoming", "Past"];
    for (let category of priorities) {
      if (events.some((event) => event.status === category)) {
        setOpenCategory(category);
        break;
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-between px-4 py-24 md:py-32 text-white">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2C3E50] leading-snug max-w-4xl">
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
        {["Happening", "Upcoming", "Past"].map((category) => {
          const filteredEvents = events.filter(
            (event) => event.status === category
          );
          if (filteredEvents.length === 0) return null;

          return (
            <Fragment key={category}>
              <div>
                <h2
                  onClick={() => setOpenCategory(category)}
                  className={`cursor-pointer text-5xl md:text-6xl font-bold ${
                    openCategory === category
                      ? "text-[#00BCD4]"
                      : "text-white/40"
                  } mb-8 transition-colors duration-300`}
                >
                  {category} Events
                </h2>
                {openCategory === category && (
                  <div className="space-y-16">
                    {filteredEvents.map((event, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <div
                          key={event.title}
                          className={`flex flex-col md:flex-row ${
                            !isEven ? "md:flex-row-reverse" : ""
                          } items-center justify-between gap-10 md:gap-20`}
                        >
                          <div
                            className={`flex-1 text-white max-w-xl ${
                              !isEven ? "md:text-right md:ml-16" : "md:mr-16"
                            }`}
                          >
                            <p className="text-base md:text-lg uppercase tracking-widest text-white/60 mb-2">
                              {event.status}
                            </p>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#ECF0F1] mb-4">
                              {event.title}
                            </h3>
                            <p className="mb-2 text-lg md:text-xl text-white/80">
                              {event.date}
                            </p>
                            <p className="mb-4 text-lg md:text-xl text-white/70">
                              {event.location}
                            </p>
                          </div>
                          <div className="flex-1 w-full max-w-md">
                            <Image
                              src={event.image}
                              alt={event.title}
                              width={600}
                              height={400}
                              className="rounded-lg object-cover w-full h-auto"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Fragment>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
