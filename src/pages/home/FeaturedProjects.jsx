import { projectList } from "../../data/Projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div id="projects" className="bg-white">
        <div className="container-main py-5 lg:py-10">
          <div className="space-y-5">
            <h1 className="heading-section text-center lg:text-left">Featured Projects</h1>
            {/* container for projects */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectList.map((project, index) => (
                <motion.a 
                initial={{ opacity:0, y:-40 }}
                animate={{ opacity:1, y:0, scale:1 }}
                transition={{ duration: 0.5, ease:"easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                key={index} href={project.link} className="block rounded-xl bg-[#F9FAFB]">
                  <img
                    src={project.image_source}
                    alt={project.title}
                    className="rounded-t-xl h-[200px] w-full"
                  />
                  <div className="flex flex-col gap-3 p-2 text-sm justify-between">
                    <h2 className="font-bold text-base text-center text-highlight">{project.title}</h2>
                    <p className="font-light">{project.desc}</p>
                    <div className="space-x-1 space-y-1 mx-auto">
                      {project.tags.map((tag, index) => (
                        <p key={index} className="inline-block font-light bg-tags text-white">{tag}</p>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
