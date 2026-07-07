import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[85vh] flex items-center bg-white px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center w-full">

        <h2 className="text-4xl font-bold text-slate-900">
          Let's Connect
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          I'm always open to discussing projects, internships,
          collaborations, or simply connecting with fellow developers.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">

          <a
            href="mailto:24110203@iitgn.ac.in"
            className="flex items-center gap-4 rounded-xl border p-5 hover:shadow-md transition"
          >
            <Mail className="text-blue-600" size={24} />
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">
                Email
              </h3>
              <p className="text-slate-600">
                24110203@iitgn.ac.in
              </p>
            </div>
          </a>

          <a
            href="https://github.com/madhurrra-ma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border p-5 hover:shadow-md transition"
          >
            <FaGithub className="text-2xl text-slate-800" />
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">
                GitHub
              </h3>
              <p className="text-slate-600">
                github.com/madhurrra-ma
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/madhura-melgiri162006/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border p-5 hover:shadow-md transition"
          >
            <FaLinkedin className="text-2xl text-blue-600" />
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">
                LinkedIn
              </h3>
              <p className="text-slate-600">
                linkedin.com/in/madhura-melgiri162006
              </p>
            </div>
          </a>

          <a
            href="/resume.pdf"
            className="flex items-center gap-4 rounded-xl border p-5 hover:shadow-md transition"
          >
            <FileText className="text-blue-600" size={24} />
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">
                Resume
              </h3>
              <p className="text-slate-600">
                Download PDF
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}