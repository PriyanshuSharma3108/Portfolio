import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-4 lg:gap-6 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <motion.div
          key={category.title}
          whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] overflow-hidden"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 border-2 border-gray-700 rounded-3xl py-2 px-3 sm:px-4 bg-gray-800"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                <span className="text-xs sm:text-sm text-gray-300 break-words whitespace-normal leading-snug">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
