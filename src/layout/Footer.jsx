import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div id="footer" className="bg-[#865cb2]">
        <div className="container-main py-5 lg:py-10">
          <div className="text-center text-white space-y-5">
            <h1 className="heading-section uppercase">Lets Connect</h1>
            <p>haidarhanif.id@gmail.com</p>

            <div className="flex flex-row gap-3 justify-center">
              <a href="https://www.linkedin.com/in/haidar-hanif/">
                <FaLinkedin color="white" size={30}></FaLinkedin>
              </a>
              <a href="https://github.com/Haidarr-h">
                <FaSquareGithub size={30} color="white"></FaSquareGithub>
              </a>
              <a href="https://www.instagram.com/haidarr.h/">
                <AiFillInstagram color="white" size={32}></AiFillInstagram>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
