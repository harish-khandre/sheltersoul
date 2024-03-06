import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const thankyou = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-extrabold text-4xl text-blue-600 my-4">
          THANK YOU!
        </h1>
        <p className="font-semibold text-xl my-4 w-2/4">
          You just Uplifted one life and created a godly impact on that
          individual&apos;s life no amount of words can describe how grateful
          that person will be and how great of a person you are, Thank you
        </p>
      <Button variant="outline" className="text-lg my-4">
          <Link href="/">
            <HomeIcon />
          </Link>
      </Button>
      </div>
    </div>
  );
};

export default thankyou;
