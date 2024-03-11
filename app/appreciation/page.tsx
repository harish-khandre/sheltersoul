import { Button } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const thankyou = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center h-screen m-auto">
      {" "}
      <section className="flex flex-col justify-center mt-4 sm:mt-0 md:top-1/2 transform md:-translate-y-1/3 items-center ">
        {" "}
        <div>
          {" "}
          <div className="container flex flex-col justify-center items-center space-y-8 px-4 md:px-6">
            {" "}
            <div className="space-y-4 text-center ">
              {" "}
              <h1 className="font-bold font-eb tracking-tighter text-blue-600 text-4xl">
                {" "}
                Thank you for your generosity{" "}
              </h1>{" "}
              <p className="max-w-[700px] text-gray-500 w-1/2 justify-self-center m-auto">
                {" "}
                Your support is making a real difference in the lives of those
                who need it most. Thank you for your kindness and compassion.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-4">
              {" "}
              <HeartFilledIcon className="h-8 w-8 text-blue-600" />{" "}
              <h2 className="font-semibold">Spread the word</h2>{" "}
              <p className="text-sm w-1/2 justify-self-center text-center text-gray-500">
                {" "}
                Encourage others to join you in making a positive impact on the
                lives of those in need.{" "}
              </p>{" "}
              <Link href="/">
                {" "}
                <Button className="">Go to Home</Button>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="bg-slate-900 p-4 md:p-8">
        {" "}
        <div className="rounded-lg shadow-md">
          {" "}
          <p className="m-4 text-blue-600 p-2">
            {" "}
            You just send that individual's details to us as well as these
            national level NGOs:{" "}
          </p>{" "}
          <ol className="rounded-lg shadow-sm text-lg flex flex-col justify-end items-center list-decimal gap-4 font-bold font-eb text-blue-600 p-4">
            {" "}
            <li>The Banyan</li> <li>Neptune Foundation</li>{" "}
            <li>Narayan Seva Sansthan</li> <li>HelpAge</li>{" "}
            <li>Association for the Mentally</li>{" "}
            <li>The Association of people with disability</li>{" "}
            <li>Smamarthanam Trust</li> <li>Yashdeep NGO</li>{" "}
            <li>homelesspeople.in</li>{" "}
            <li>Leonard cheshire disability foundation</li> <li>CADMS NGO</li>{" "}
            <li>Shraddha Rehabilitation Foundation</li> <li>Anugraha NGO</li>{" "}
            <li>Diya Foundation</li>{" "}
          </ol>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default thankyou;
