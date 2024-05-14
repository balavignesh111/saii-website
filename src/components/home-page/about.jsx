import React from "react";
import Footer from "./footer.component";

const Abouts = () => {
  return (
    <div className="bg-gray-100 min-h-full flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-14 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#000000] ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to SAII
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At Suguna Innovations, we're not just
            educators, we're architects of tomorrow's intelligence. Our
            institute is a crucible of creativity, where minds converge to forge
            new pathways in AI. SAII is where curiosity meets innovation, and
            learning transcends boundaries.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We cultivate a culture of relentless exploration, where every
            challenge is an opportunity for growth. Here, students aren't just
            learners; they're pioneers, shaping the future of technology. Our
            commitment to excellence is unwavering, driving us to push the
            boundaries of what's possible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            SAII is a sanctuary for visionaries, a breeding ground for
            brilliance, and a catalyst for global transformation. Join us at
            SAII, where the journey to mastery is as exhilarating as the
            destination itself. Welcome to a place where dreams take flight and
            the future is born anew every day.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Pursuing the highest standards of academic rigor, innovation,
                and professionalism in all endeavors.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Cultivating partnerships and collaborations across disciplines,
                industries, and communities to foster innovation and drive
                collective progress.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Learn from a team of experienced faculty members who are
                passionate about AI and dedicated to guiding students on their
                learning journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Hands-on Learning
              </h3>
              <p className="text-gray-600">
                Gain practical, hands-on experience through real-world projects,
                case studies, and industry collaborations that prepare you for
                success in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
