import {projectList} from "../../data/Projects";

export default function Projects() {
  return (
    <>
      <div className="bg-white">
        <div className="container-main py-2">
            <div>
                <h1>Featured Projects</h1>
                {/* container for projects */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {projectList.map((project, index) => (
                    <a 
                    key={index}
                    href=""
                    className="block rounded-xl bg-gray-300"
                    >
                      <img src={project.image_source} 
                      alt={project.title} />
                      <div>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        {project.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>

                    </a>

                  ))}

                </div>
                
            </div>
        </div>
      </div>
    </>
  );
}
