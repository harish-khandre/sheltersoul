export const Step = () => {
  return (
    <div
      id="step"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          At <span className="text-blue-600">Sheltered Soul</span>, making a
          difference is as simple as{" "}
          <span className="text-blue-600"> 1-2-3.</span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Here's how our platform empowers you to be a catalyst for change:
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold rounded-full text-blue-600  bg-deep-purple-accent-400">
              1
            </p>
            <p className="text-lg font-bold leading-5 text-blue-600 "> Find </p>
          </div>
          <p className="text-base ">
            Identify a mentally disabled homeless individual in your community
            who could use a helping hand.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-blue-600 rounded-full bg-deep-purple-accent-400">
              2
            </p>
            <p className="text-lg font-bold leading-5 text-blue-600 ">Report</p>
          </div>
          <p className="text-base ">
            Visit our user-friendly platform and submit essential details about
            the individual, such as a photo, location, and their name (if
            known).
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-blue-600 rounded-full bg-deep-purple-accent-400">
              3
            </p>
            <p className="text-lg font-bold leading-5 text-blue-600">
              Help Arrives
            </p>
          </div>
          <p className="text-base ">
            Once you submit a report, Sheltered Soul takes swift action by
            connecting with our partner NGOs.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-blue-600 w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
