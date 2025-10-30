"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getProjects } from "@/data/projects"; // fetch GitHub projects
import { useTheme } from "@/context/ThemeContext"; // use main theme

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 w-[340px] sm:w-[380px] perspective-1000"
    >
      <div
        className={`relative h-[420px] rounded-3xl overflow-hidden transition-all duration-500 ${
          isDark ? "bg-gray-800/50" : "bg-white"
        } backdrop-blur-xl border ${
          isDark ? "border-gray-700/50" : "border-gray-200"
        }`}
      >
        <div className="relative h-full p-8 flex flex-col justify-between z-10">
          <div>
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              {project.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {project.description}
            </p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
            }`}
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error("Failed to load projects:", error));
  }, []);

  return (
    <section
      id="projects"
      className={`py-24 relative transition-colors duration-500 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-5xl font-bold mb-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Featured <span className="text-[#00d8ff]">Projects</span>
        </h2>
        <p
          className={`text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Explore my latest work
        </p>
      </div>

      {/* Scroll container */}
      <div className="flex gap-8 overflow-x-auto pb-8 px-8 sm:px-12 lg:px-16 snap-x snap-mandatory scroll-smooth scrollbar-x">
        {projects.map((project, idx) => (
          <div key={idx} className="snap-center">
            <ProjectCard project={project} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
};


export default ProjectsSection;
