import { Button } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const thankyou = () => {
  return (
    <section className="w-screen flex justify-center items-center h-screen ">
      <div className="container flex flex-col items-center space-y-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold font-eb tracking-tighter text-blue-600 sm:text-4xl md:text-5xl">
            Thank you for your generosity
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Your support is making a real difference in the lives of those who
            need it most. Thank you for your kindness and compassion.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <HeartFilledIcon className="h-8 w-8 text-blue-600" />
          <div className="grid gap-1">
            <h2 className="text-sm font-semibold">Spread the word</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Encourage others to join you in making a positive impact on the
              lives of those in need.
            </p>
          </div>
          <Link href="/">
            <Button className="">Go to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default thankyou;
