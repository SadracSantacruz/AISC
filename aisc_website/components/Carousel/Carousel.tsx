import Image from "next/image";

const Carousel = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20">
      <h2 className="text-white text-lg font-semibold mb-8 tracking-widest">
        UPCOMING
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side image card */}
        <div className="max-w-md w-full bg-black rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/D3BB2574-9235-4D5E-98BC-EC3ADC8114FE.png"
            alt="TapEx Fundraiser Flyer"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col items-start text-white">
          <h3 className="text-5xl md:text-6xl font-black mb-6">
            TAPEX FUNDRAISER
          </h3>
          <p className="text-lg mb-2">Tuesday, May 2 | 7:00 - 9:00PM PST</p>
          <p className="text-lg">Price Center</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
