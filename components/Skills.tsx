import {
  Code2,
  MonitorSmartphone,
  Wrench,
  BookOpen,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} className="text-blue-500" />,
      skills: ["C++", "C", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Libraries",
      icon: <MonitorSmartphone size={24} className="text-blue-500" />,
      skills: ["React", "Next.js", "React Native", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: <Wrench size={24} className="text-blue-500" />,
      skills: ["Git", "GitHub", "VS Code", "MongoDB"],
    },
    {
      title: "Currently Exploring",
      icon: <BookOpen size={24} className="text-blue-500" />,
      skills: ["Node.js", "Expo Router", "DSA"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900">
            Skills
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 leading-8">
            Languages, frameworks, and tools I use while building
            software and solving real-world problems.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex items-center gap-3 mb-6">
                {category.icon}

                <h3 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}