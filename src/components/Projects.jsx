import React from "react";
import nova from '../assets/projects/novaapp.png';
import maxbet from '../assets/projects/maxbetmx.png';
import restaurant from '../assets/projects/restaurant.png';

const Projects = () => {
  const projects = [
    {
      title: "Lackylarry Betting System",
      description:
        "A dynamic betting platform offering a variety of thrilling games such as Aviator, Coin Flip, Case Battles, Mines, and more.",
      photo: maxbet,
      link: "https://luckylarry.online/",
      github: "https://github.com/miriammildred/maxbetlucky",
    },
    {
      title: "Nova ticketing system",
      description:
        "A ticketing system, crafted to improve customer satisfaction ,simplify  support processes and efficient issue resolution.  ",
      photo: nova,
      // link: "https://wonderful-glacier-0cc79bd10.5.azurestaticapps.net/",
      github: "https://github.com/miriammildred/novafinale",
    },
    {
      title: "Simple Restaurant website",
      description:
        "A simple restaurant website to help manage and process orders enhancing dining  experience. Project still in the development phace",
      photo: restaurant,
      link: "https://miriammildred.github.io/restaurant/",
      github: "https://github.com/MIRIAMMILDRED/restaurant",
    },
    // {
    //   title: "COVID-19-TRACKER",
    //   description:
    //     "The COVID Tracking Project collects and publishes number of worldwide cases, number of death cases and number of recovered cases. ",
    //   photo: covid,
    //   link: "https://covid-19-tracker-75e50.web.app/",
    //   github: "https://github.com/miriammildred/trivia",
    // },
   
    
    
    
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center ">⭐ Recent  Projects ⭐</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"

              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>

              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  <a href={project.link}>Live Link</a>
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                  <a href={project.github}>GitHub</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
