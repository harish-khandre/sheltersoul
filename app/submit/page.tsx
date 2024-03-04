import SubmissionCard from "@/components/submission-card";
import { Toaster } from "react-hot-toast";
export default function Submit() {
  return (
    <>
      <section
        className="w-full h-[600px] bg-cover bg-center "
        /* style={{
          backgroundImage: "url('https://imgur.com/7Zr7WyZ.png')",
        }} */
      >
        <div className=" flex justify-center items-center h-screen ">
          <SubmissionCard />
        </div>
      </section>
      <Toaster />
    </>
  );
}
