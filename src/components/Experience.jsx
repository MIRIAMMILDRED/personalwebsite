import React from "react";

const Experience = () => {

  return (
    <div className="md:px-10 px-7 my-8" id="experience">
      <hr />
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center ">🧑‍💻 Experience 🧑‍💻</div>
      </div>
      <div className="container items-center justify-center flex sm: flex-row flex-wrap ">
        <div className=" w-96 bg-neutral text-neutral-content mr-5 my-5">
          <div className=" items-center text-center">
            <h2 className="text-red-500 font-semibold text-2xl">Trip it safaris web developer</h2>
            <p className="text-white my-4 italic">I was responsible for designing, developing, and maintaining the company’s online presence. My role involved creating user-friendly and visually appealing websites that enhanced the customer experience</p>
            <div className=" justify-end my-4 ">
              <button className="shadow-lg  py-1.5 px-9 rounded border-none ml-5 text-blue-300 ">
                2021 -2022
              </button>
            </div>
          </div>
        </div>
        <div className=" w-96 bg-neutral text-neutral-content mr-5 my-5">
          <div className=" items-center text-center">
            <h2 className="text-yellow-500 font-semibold text-2xl">Software Development Mentor @ emobilis</h2>
            <p className="text-white my-4 italic">Guiding students in coding and technical concepts, assisting them in debugging, troubleshooting and mastering coding skills.</p>
            <div className=" justify-end my-4 ">
              <button className="shadow-lg  py-1.5 px-9 rounded border-none ml-5 text-blue-300 ">
                2023/2024
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" w-96 bg-neutral text-neutral-content ml-5 my-5">
          <div className=" items-center text-center">
            <h2 className="text-green-300  font-semibold text-2xl">Software Engineering Industrial Attachee at Mungania Tea Factory Limited</h2>
            <p className="text-white my-2 italic">Working in the office to help build and maintain Mungania’s server systems. Main responsibilities include building and
              optimizing SQL DB aggregation pipelines for specific queries.</p>
            <div className=" justify-end my-4">
              <button className="shadow-lg text-blue-300  py-1.5 px-9 rounded border-none ml-5 ">
                July 2022 – August 2022
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
