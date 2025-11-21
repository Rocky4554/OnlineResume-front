import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import LightRays from "../components/LightRays";
import PortfolioCards from "../components/PortfolioCards";
// import ThreeDCardDemo from "../components/ThreeDCardDemo"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const About = () => {
  const { isDark } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      {isDark && (
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer creating digital experiences that matter
          </p>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://ik.imagekit.io/raunakImageKIt/IMG_20220909_204647.jpg?updatedAt=1758063110443"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div> */}

              {/* <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-10 w-10 md:h-12 md:w-12 text-white" />
              </div> */}
              {/* <ThreeDCardDemo/> */}

              <CardContainer className="inter-var w-[70%] -mt-60">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Hello , Welcome 😃
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    I am Raunak Kumar...
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="https://ik.imagekit.io/raunakImageKIt/IMG_20220909_204647.jpg?updatedAt=1758063110443"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => scrollToSection("contact")}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer"
                    >
                      Hire Me →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                      onClick={() => {
                        try {
                          window.open("/RAUNAK_KUMAR_RESUME.pdf", "_blank");
                        } catch (error) {
                          console.error("Could not open resume:", error);
                        }
                      }}
                    >
                      Downlaod Resume
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </motion.div>

          {/* About Description */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with
              experience in creating digital solutions that combine beautiful
              design with robust functionality. I specialize in React,
              Javascript, Node.js, Tailwind CSS and many more modern web technologies.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>  */}

          {/* <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="space-y-4"
>
  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
    I'm a passionate <span className="text-red-500 font-semibold">frontend</span> and 
    full-stack developer with experience in creating digital solutions that combine 
    beautiful design with robust functionality. I specialize in React, Javascript, 
    Node.js, Tailwind CSS and many more modern web technologies.
  </p>
  
  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
    When I'm not coding, you'll find me exploring new technologies, contributing 
    to open-source projects, or sharing knowledge with the developer community.
  </p>
</motion.div> */}

          {/* Using different typography (heading + body text) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Passionate <span className="text-red-400">Frontend</span>{" "}
              Developer
            </h3>

            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <div className="text-lg leading-relaxed">
                I'm a{" "}
                <span className="text-teal-400 font-semibold">frontend</span>{" "}
                developer with experience in creating digital solutions that
                combine beautiful design with robust functionality. I specialize
                in <span className="text-blue-400 font-medium">React</span>,
                <span className="text-yellow-400 font-medium">Javascript</span>,
                <span className="text-green-400 font-medium">Node.js</span>,
                <span className="text-cyan-400 font-medium">Tailwind CSS</span>,
                <span className="text-emerald-400 font-medium">MongoDB</span>{" "}
                and many more modern web technologies.
              </div>

              <div>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </div>
            </div>
          </motion.div>

          {/* Skills Section (no shiny box) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-[-8rem]" // Moves it slightly up
          >
            <div className="grid grid-cols-1 gap-6 py-4">
              <PortfolioCards />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Top Skills
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
