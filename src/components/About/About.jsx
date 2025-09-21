import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.jpg'; // Adjust path if needed

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Priyanshu Sharma
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Fullstack Developer',
                'Software Engineer',
                'Tech Enthusiast',
                'Problem Solver',
                'Tech Learner',
                'Tech Explorer',
                'Coder',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am an enthusiastic full-stack developer with a solid foundation in web technologies and a keen interest in building responsive, user-centric applications. Recently trained in the MERN stack (MongoDB, Express.js, React, Node.js), I’ve worked on several personal and academic projects that reflect my ability to convert ideas into functional, real-world solutions. I’m well-versed with modern development tools like Git, VS Code, and Postman, and have experience using platforms like GitHub for version control and collaboration. As a quick learner with strong problem-solving skills, I’m eager to grow in a dynamic team environment, contribute meaningfully to projects, and continuously improve through hands-on experience.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1gwBgsymogkUSfZY0rk7bSz2brvNvAvAl/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side (Framer Motion Tilt Effect) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full overflow-hidden shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={profileImage}
              alt="Priyanshu Sharma"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
