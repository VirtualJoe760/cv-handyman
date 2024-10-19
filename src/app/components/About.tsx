import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Experience Hardwork Dedication
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {/* First Card */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  10+ Years in The Desert{" "}
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Hughes Home Services aka Coachella Valley Handyman
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Offers services for both residential and commercial projects
                  including general household and electrical repair. See our
                  list of services{" "}
                  <Link
                    className="text-blue-500 hover:text-yellow-600"
                    href="/our-services"
                  >
                    here.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Let&apos;s Talk
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Have questions? Let&apos;s chat.
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  You can use our instant chat messaging service here on the
                  site. When you email us, we will send you a confirmation and a
                  calendar to put you on schedule.{" "}
                  <Link
                    href="/contact"
                    className="text-blue-500 hover:text-yellow-600"
                  >
                    Email us.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Where We Work
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  We operate throughout The Coachella Valley
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From Desert Hot Springs to Thermal we look forward to helping
                  you with our range of handyman services. Click here for our{" "}
                  <Link
                    href="/cities"
                    className="text-blue-500 hover:text-yellow-600"
                  >
                    service area.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Ask us for a quote
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Remodel Services
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  We also offer home remodeling services ranging from Kitchen,
                  Bathroom, Flooring and more. We are happy to give you a quote
                  when you{" "}
                  <Link
                    className="text-blue-500 hover:text-yellow-600"
                    href="/contact"
                  >
                    contact us.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Card */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Looking for work?
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  We are always looking to bring on new team members
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Fill out our questionnaire, if we like what we see we&apos;ll
                  reach out and set up a time to meet.{" "}
                  <Link
                    href="jobs"
                    className="text-blue-500 hover:text-yellow-600"
                  >
                    Job Questionnaire.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;