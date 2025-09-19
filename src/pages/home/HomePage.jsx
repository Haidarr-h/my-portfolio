import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import myPhoto from '../../assets/meReal.png';
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <div className="bg-white">
        <div className="container-main pt-10 lg:pt-30">
          <div className="flex flex-col lg:flex-row justify-between">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left">
                Turning Your Ideas into Real-World Digital Solutions
              </h1>
              <h3 className="text-center lg:text-left">
                I'm Haidar, a software engineer ready to help build your dream
                application.
              </h3>
              <div className="flex flex-row gap-3 justify-center lg:justify-start">
                <p>Follow my socials</p>
                <motion.a href="https://www.linkedin.com/in/haidar-hanif/"
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5 } }}
                >
                  <FaLinkedin color="#0066c8" size={30}></FaLinkedin>
                </motion.a>
                <motion.a href="https://github.com/Haidarr-h"
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5 } }}
                >
                  <FaSquareGithub size={30}></FaSquareGithub>
                </motion.a>
                <motion.a href="https://www.instagram.com/haidarr.h/"
                whileHover={{ rotate: 360, scale: 1.2, transition: { duration: 0.5 } }}
                >
                  <AiFillInstagram color="#ff2ea6" size={32}></AiFillInstagram>
                </motion.a>
              </div>
              {/* <button className="mx-auto block lg:mx-0">
                View my projects
              </button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src={myPhoto}
                alt="photo Profile"
                className="w-[350px] h-auto lg:mr-20 mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
