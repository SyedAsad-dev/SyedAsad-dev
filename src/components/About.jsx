import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, link, icon }) => {
  return (

    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px]"
    >
      <button
              className="xs:w-[250px] w-full bg-white rounded-[20px]"
              onClick={() => window.open(link, "_blank")}
              // onMouseOver={() => {
              //   document
              //     .querySelector(".btn-icon")
              //     .setAttribute("src", pineappleHover);
              // }}
              // onMouseOut={() => {
              //   documentxs
              //     .querySelector(".btn-icon")
              //     .setAttribute("src", pineapple);
              // }}
            >
             <img src={icon} alt={link} className="flex items-center justify-center xs:w-[250px] h-[250px] bg-jetLight rounded-[20px]" />
  
            </button>
      
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        I am Syed Asad and I am a experienced iOS & Flutter Developer with years of hands-on expertise in
        designing, developing, and maintaining mobile applications. Proficient in both native iOS development using Swift/
        Objective-C and cross-platform development with Flutter. Adept at collaborating with interdisciplinary teams to deliver
        high-quality software solutions that meet client requirements and exceed expectations. Skilled in UI/UX design
        principles, API integration, performance optimization, and troubleshooting/debugging. Strong communication skills, with
        a proven track record of effectively translating complex technical concepts to non-technical stakeholders. Passionate
        about staying updated with the latest technologies and continuously improving skills to deliver innovative solutions in the
        ever-evolving mobile development landscape.
      </motion.p>

     
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Articles.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.link} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
