import Hero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import ValueProposition from "@/components/home/value-proposition";
import { Step } from "@/components/home/step";
import CTA from "@/components/home/CTA";
import AboutUs from "@/components/home/about-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProposition />
      <Step />
      <CTA />
      <AboutUs />
      <Footer />
    </>
  );
}
