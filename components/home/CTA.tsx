"use client";
import { Spotlight } from "../ui/spotlight";
import { useRef } from "react";
import { useInView } from "framer-motion";
const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-28 relative bg-blue-600">
      {isInView ? (
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      ) : null}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Be the Change Today!
          </p>
          <p className="text-blue-100 mt-3 font-medium text-base sm:text-lg ">
            Every report, every click, every act of compassion brings us one
            step closer to a world where no mentally disabled individual faces
            homelessness alone. Join Selp in making a lasting impact:
          </p>
        </div>
        <div className="mt-4">
          <a
            href="/submit"
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Report Now
          </a>
        </div>
      </div>
    </section>
  );
};
export default CTA;
