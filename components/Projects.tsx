import {
  FaGithub,
  FaCar,
  FaStore,
  FaCube,
  FaChessQueen,
} from "react-icons/fa";

import { Brain } from "lucide-react";

const projects = [
  {
    title: "ParkEase",
    subtitle: "Smart Parking Application",
    description:
      "Smart parking app with map integration, parking filters and real-time navigation.",
    tech: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/madhurrra-ma/Park_Ease",
    icon: <FaCar className="text-5xl text-blue-500" />,
  },
  {
    title: "IITGN Bazaar",
    subtitle: "Marketplace Platform",
    description:
      "Marketplace for the IIT Gandhinagar community to buy, sell and exchange products.",
    tech: ["Next.js", "React", "MongoDB"],
    github: "https://github.com/madhurrra-ma/IITGN_Bazaar",
    icon: <FaStore className="text-5xl text-blue-500" />,
  },
  {
    title: "MRI Brain Tumor Detection",
    subtitle: "Deep Learning Project",
    description:
      "Brain tumor detection using CNNs and MRI image preprocessing.",
    tech: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/madhurrra-ma/Brain-Tumor-Detection",
    icon: <Brain className="h-12 w-12 text-blue-500" />,
  },
  {
    title: "Rubik's Cube Solver",
    subtitle: "C++ Project",
    description:
      "Rubik's Cube Solver using OOP and multiple cube representations.",
    tech: ["C++", "OOP", "DSA"],
    github: "https://github.com/madhurrra-ma/Rubik_cube_solver",
    icon: <FaCube className="text-5xl text-blue-500" />,
  },
  {
    title: "N-Queens Visualizer",
    subtitle: "Algorithm Visualizer",
    description:
      "Interactive visualization of the N-Queens backtracking algorithm.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/madhurrra-ma/Puzzle_project",
    icon: <FaChessQueen className="text-5xl text-blue-500" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Projects that showcase my software development journey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              {/* Header */}

              <div className="h-40 flex flex-col items-center justify-center border-b border-slate-200 bg-slate-50">

                {project.icon}

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {project.subtitle}
                </p>

              </div>

              {/* Body */}

              <div className="p-6 flex flex-col flex-grow">

                <p className="text-slate-600 leading-7 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}