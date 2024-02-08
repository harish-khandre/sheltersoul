export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-5 ">
                About Us
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                We are a team of dedicated professionals committed to helping
                businesses succeed. Our diverse backgrounds and unique skills
                enable us to provide innovative solutions to complex problems.
                We believe in the power of collaboration and strive to create a
                positive impact in everything we do.
              </p>
            </div>
          </div>
          <img
            alt="Team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="https://images.unsplash.com/photo-1533659124865-d6072dc035e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhlbHBpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
