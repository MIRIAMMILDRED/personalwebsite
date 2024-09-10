import React from "react";
// import azureai from "../src/assets/license/azure-ai.png";
import aws from '../assets/license/aws.png';
import google from '../assets/license/google.png';
import react from '../assets/license/react.png';


const License = () => {
  const education = [
    { id: 1, name: 'AWS Certified:Cloud Practitioner', link: 'https://www.credly.com/badges/9a479225-6154-47f8-a111-5a56e02ed714/linked_in_profile', image: aws },
    { id: 2, name: 'Google Certified: Security Risk Management', link: 'https://www.coursera.org/account/accomplishments/verify/PZ5HKIWJIZP8', image: google },
    { id: 3, name: 'React Certified: Front-End developer', link: 'https://drive.google.com/file/d/1EcQlLasbVjcwOPD7Ui_t6lO4_xwh8214/view', image: react },
  
  ]
  return (
    <div className="md:px-10 px-7 my-8" id="license">
      <hr />
      <div className="md:flex my-7 items-center justify-center ">
        <div className="text-primary text-5xl font-bold items-center "> 🎖️ License & Certification 🏅</div>
      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className='shadow-lg flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt="" className='mb-3' width={150} height={120} />
            <h6 className='text-2xl my-4 text-blue-500'>{school.name}</h6>
            {/* <p className='text-base '>{school.description}</p> */}
            <button className="btn border-2 border-green-600 transition-all duration-500  py-2 px-6 rounded-3xl text-white hover:bg-green-600 hover:text-yellow-500">
              <a href={school.link}>Verify</a>
            </button>
          </div>)
        }
      </div>
    </div>
  );
};

export default License;
