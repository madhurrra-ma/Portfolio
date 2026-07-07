import { FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const profiles = [
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-4xl text-blue-600" />,
    username: "your_username",
    description: "Competitive Programming",
    link: "https://codeforces.com/profile/your_username",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-4xl text-yellow-500" />,
    username: "your_username",
    description: "DSA Practice",
    link: "https://leetcode.com/u/your_username/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl text-slate-800" />,
    username: "your_username",
    description: "Projects & Open Source",
    link: "https://github.com/your_username",
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
{/* "min-h-screen flex items-center bg-white px-6 py-24" */}
        {/* Heading */}

        <div className="text-center mb-16">

          

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Coding Profiles
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Platforms where I solve problems, participate in contests, and share my projects.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex justify-center mb-6">
                {profile.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {profile.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {profile.description}
              </p>

              <p className="mt-4 font-medium text-blue-600">
                @{profile.username}
              </p>

              <span className="inline-block mt-6 text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                View Profile →
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}