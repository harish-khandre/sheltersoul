import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Hero() {
  const words = [
    {
      text: "Empowering",
    },
    {
      text: "the",
    },
    {
      text: "Forgotten,",
    },
    {
      text: "Selp",
      className: "text-blue-600 dark:text-blue-500",
    },
  ];
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          <TypewriterEffectSmooth words={words} />
        </h1>
        <p className=" text-lg md:text-xl lg:text-2xl text-white text-center max-w-2xl">
          Join us in our mission to provide support and resources for mentally
          disabled homeless individuals. Your involvement can change a life.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Learn More
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
            href="/submit"
          >
            Send Help
          </Link>
        </div>
      </div>
    </section>
  );
}
