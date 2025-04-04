import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

export default function Projet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % projectsData.length;
      console.log("Next Project Index:", newIndex);
      return newIndex;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1;
      console.log("Previous Project Index:", newIndex);
      return newIndex;
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 px-6 md:px-30 lg:px-10 w-full overflow-hidden"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projet{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Complet
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet, Rem magni provident libero sit!
      </p>

      {/* slider button */}

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" srcset="" />
        </button>

        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" srcset="" />
        </button>
      </div>

      <div>
        <h3>Project {currentIndex + 1}</h3>
        <p>{projectsData[currentIndex]?.title || "No project available"}</p>
      </div>

      {/* project slider container */}

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}% )`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className=" text-gray-500 text-sm">
                    {project.price} <span> </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
