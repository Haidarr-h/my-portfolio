import { FaReact } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

export default function AboutMe() {
  return (
    <>
      <div className="bg-[#242424]">
        <div className="container-main py-10">
          <div className="text-white flex flex-row justify-between">
            {/* left */}
            <div className="flex-1">
              <h1 className="heading-section">About Me</h1>
              <div className="text-justify mt-2">
                <p>
                  I am a recent Computer Science graduate with interest in
                  <span className="text-[#ac78e4] font-bold"> Software Engineering</span> and <span className="text-[#ac78e4] font-bold">Artificial Intelligence</span>. I have
                  worked on 5+ website projects and AI integrations.
                </p>
                <br />
                <p>
                  I actively participated in Business competitions, Startup
                  competitions, Research, Conferences, and Event Organizers.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col gap-5 flex-1 justify-center items-center">
              {/* atas */}
              <div className="flex flex-row gap-3 card-about-me">
                <div>
                  <FaReact className="mx-auto" size={30}/>
                  <p>Frontend Development</p>
                </div>
                <div>
                  <SiFastapi className="mx-auto" size={30}/>
                  <p>Backend Development</p>
                </div>
                <div>
                  <FaPython className="mx-auto" size={30}/>
                  <p>Python Native</p>
                </div>
              </div>

              {/* bawah */}
              <div className="flex flex-row gap-3 card-about-me">
                <div>
                  <FaBusinessTime className="mx-auto" size={30}/>
                  <p>Basic Business IT</p>
                </div>
                <div>
                  <FaBrain className="mx-auto" size={30}/>
                  <p>Artificial Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
