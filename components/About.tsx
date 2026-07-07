export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            About Me
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            A little about my journey, interests, and what I enjoy building.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* Left */}

          <div>

            

            <p className="text-lg leading-8 text-slate-600">
              I'm a Third-year{" "}
              <span className="font-semibold text-slate-900">
                Electrical Engineering
              </span>{" "}
              student at{" "}
              <span className="font-semibold text-slate-900">
                IIT Gandhinagar
              </span>{" "}
              with a strong interest in Software Development and Competitive
              Programming.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              I enjoy solving challenging algorithmic problems, building
              practical software applications, and continuously improving my
              knowledge of Data Structures, Algorithms, Full-Stack Development,
              and Artificial Intelligence.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              My goal is to become a software engineer who enjoys creating
              impactful products while continuously learning new technologies.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-600">3rd</h3>
                <p className="mt-2 text-slate-600">
                  Year at IITGN
                </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="mt-2 text-slate-600">
                Projects Built
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-600">C++</h3>
              <p className="mt-2 text-slate-600">
                Primary Language
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-600">DSA</h3>
              <p className="mt-2 text-slate-600">
                Competitive Programming
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}