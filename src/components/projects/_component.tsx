import PageHeader from "../page-headers/_component";
import { projectItems } from "../../core";
import ImageCard from "../image-card/_component";

const Projects = () => {
  return (
    <>
      <div id="projects" className="mx-80 mobile:mx-8">
        <PageHeader title="Projects" />
        <div className="flex justify-between mt-8 mobile:flex-col">
          {projectItems.map((item: any, index: number) => (
            <div className="flex justify-center" key={index}>
              <ImageCard
                title={item.title}
                src={item.image}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
