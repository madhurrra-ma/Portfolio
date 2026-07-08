import Image from "next/image";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24"
    >
      <div className="rounded-3xl bg-white p-3 shadow-2xl">
        <Image
          src="/iitgn.1st.jpeg"
          alt="IIT Gandhinagar"
          fill
          priority
          className="object-cover object-center opacity-100"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/75" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* Left Side */}
          <div>

            {/* Greeting */}
            <p className="mt-6 text-lg font-medium text-slate-600">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              Madhura Melgiri
            </h1>

            {/* Role */}
            <p className="mt-8 text-2xl font-semibold text-slate-800">
              Electrical Engineering Student
            </p>

            <p className="mt-2 text-lg font-medium text-blue-600">
              IIT Gandhinagar
            </p>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Passionate about software development, competitive programming, and building real-world applications.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/24110203_Madhura_Resume.pdf"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="https://github.com/madhurrra-ma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/madhura-melgiri162006/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[380px] h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">

              <Image
                src="/profile1.jpeg"
                alt="Madhura Melgiri"
                fill
                className="object-cover object-top"
                priority
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
