import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <div id="about" className="bg-[#f1f5f7]">
        <div className="container-main py-10">
          <motion.div
            className="text-black flex flex-col lg:flex-row gap-5 lg:gap-1 justify-between"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* left */}
            <div className="flex-1">
              <h1 className="heading-section">About Me</h1>
              <div className="text-justify mt-2">
                <p>
                  I am a recent Computer Science graduate with interest in
                  <span className="text-[#ac78e4] font-bold">
                    {" "}
                    Software Engineering
                  </span>{" "}
                  and{" "}
                  <span className="text-[#ac78e4] font-bold">
                    Artificial Intelligence
                  </span>
                  . I have worked on 5+ website projects and AI integrations.
                </p>
                <br />
                <p>
                  I actively participated in Business competitions, Startup
                  competitions, Research, Conferences, and Event Organizers.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col text-white gap-5 flex-1 justify-center items-center">
              {/* atas */}
              <div className="flex flex-row gap-3 card-about-me">
                <div>
                  <FaReact className="mx-auto" size={30} />
                  <p>Frontend Development</p>
                </div>
                <div>
                  <SiFastapi className="mx-auto" size={30} />
                  <p>Backend Development</p>
                </div>
                <div>
                  <FaPython className="mx-auto" size={30} />
                  <p>Python Native</p>
                </div>
              </div>

              {/* bawah */}
              <div className="flex flex-row gap-3 card-about-me">
                <div>
                  <FaBusinessTime className="mx-auto" size={30} />
                  <p>Basic Business IT</p>
                </div>
                <div>
                  <FaBrain className="mx-auto" size={30} />
                  <p>Artificial Intelligence</p>
                </div>
                <div>
                  <RiSpeakFill className="mx-auto" size={30} />
                  <p className="text-center text-xs">Communication</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
