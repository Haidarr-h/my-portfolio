import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function HomePage() {
  return (
    <>
      <div className="bg-white">
        <div className="container-main pt-10 lg:pt-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-5">
              <h1 className="font-bold text-3xl lg:text-4xl text-center lg:text-left">
                Turning Your Ideas into Real-World Digital Solutions
              </h1>
              <h3 className="text-center lg:text-left">
                I'm Haidar, a software engineer ready to help build your dream
                application.
              </h3>
              <div className="flex flex-row gap-3 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/haidar-hanif/">
                  <FaLinkedin color="#0066c8" size={30}></FaLinkedin>
                </a>
                <a href="https://github.com/Haidarr-h">
                  <FaSquareGithub size={30}></FaSquareGithub>
                </a>
                <a href="https://www.instagram.com/haidarr.h/"><AiFillInstagram color="#ff2ea6" size={32}></AiFillInstagram></a>
              </div>
              <button className="mx-auto block lg:mx-0">View my projects</button>

            </div>

            <div>
              <img
                src="../src/assets/meReal.png"
                alt="photo Profile"
                className="w-[350px] h-auto mr-20"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
