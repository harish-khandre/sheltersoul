import Image from "next/image";
import SlideInView from "../fade";

export default function ValueProposition() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <SlideInView direction="left">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid items-center justify-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://images.unsplash.com/photo-1529520161780-2573a0926b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-eb font-bold tracking-tighter sm:text-5xl py-5 ">
                      The problem we solve
                    </h2>
                    <p className="max-w-[600px] text-gray-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      In the shadows of our cities, a silent crisis persists.{" "}
                      <span className="text-blue-600">
                        Mentally disabled individuals find themselves grappling
                        with homelessness
                      </span>
                      , facing a myriad of challenges often unnoticed by
                      society. Amidst the bustling life, their{" "}
                      <span className="text-blue-600">
                        {" "}
                        struggles are overlooked, leaving them vulnerable{" "}
                      </span>{" "}
                      and without the support they desperately need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SlideInView>
        <SlideInView direction="right">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid items-center justify-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <Image
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-eb font-bold tracking-tighter sm:text-5xl py-5 ">
                      Our solution
                    </h2>
                    <p className="max-w-[600px] text-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      <span className="text-blue-900 ">
                        Selp stands as a beacon of hope, bridging the gap
                        between the unseen and the compassionate.{" "}
                      </span>
                      We provide a platform where individuals can report
                      mentally disabled homeless people, initiating a powerful
                      ripple effect of change. By seamlessly connecting those in
                      need with NGOs dedicated to making a difference{" "}
                      <span className="text-blue-900">
                        , Selp empowers communities to rally behind a common
                        cause.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SlideInView>
      </main>
    </div>
  );
}
