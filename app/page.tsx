import Hero from "@/components/home/hero";
import Navbar from "@/components/navbar";
import ValueProposition from "@/components/home/value-proposition";
import { Step } from "@/components/home/step";
import CTA from "@/components/home/CTA";
import AboutUs from "@/components/home/about-us";
import Footer from "@/components/footer";
import SlideInView from "@/components/fade";

export default function Home() {
  return (
    <>
      <Navbar />
      <SlideInView direction="up">
        <Hero />
      </SlideInView>
      <SlideInView direction="down">
        <ValueProposition />
      </SlideInView>
      <SlideInView direction="down">
        <Step />
      </SlideInView>
      <SlideInView direction="down">
        <CTA />
      </SlideInView>
      <SlideInView direction="down">
        <AboutUs />
      </SlideInView>
      <Footer />
    </>
  );
}
