import React from "react";
import aiulogo from '../assets/icons/aiulogo.jpeg';
import emobilis from '../assets/icons/emobilis_logo.jpeg';
import shecode from '../assets/icons/shecode.jpeg';

const About = () => {
  const education = [
    { id: 1, name: 'Information Technology', description: 'at Africa International University 2023 Graduate', image: aiulogo },
    { id: 2, name: 'eMobilis Training Institute', description: 'Full stack webdevelopment  bootcamp 2022 Graduate', image: emobilis },
    { id: 3, name: 'Shecode Africa', description: 'Front-end Development 2024 Graduate', image: shecode },
  ]
  return (
    <div className="md:px-10 px-7 sm:-mt-10" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
      I am an IT graduate from Kenya with a passion for technology and a strong foundation in various tech domains. My expertise spans across React, WordPress, Magento, PHP, Node.js, and Adobe Illustrator, reflecting my diverse skill set. As a cybersecurity enthusiast, I have a particular interest in penetration testing, constantly seeking to deepen my knowledge in this ever-evolving field.

I am a dedicated learner, always on the lookout for new challenges and opportunities to grow. My commitment to continuous learning drives me to stay up-to-date with the latest trends and advancements in technology. Beyond my technical skills, I am a mentor who is passionate about gender inclusivity in the tech industry. I focus on teaching and encouraging young women to pursue careers in technology, striving to make the field more inclusive and diverse.

With a strong work ethic and an insatiable curiosity, I am committed to making a positive impact in the tech world, both through my work and my mentorship.


      </p>
      <hr />
      <div className="md:flex my-7 items-center justify-center">
        <div className="text-primary text-5xl font-bold items-center">📚 Education 🎓</div>

      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt="" className='mb-3' width={120} height={120} />
            <h6 className='text-2xl'>{school.name}</h6>
            <p className='text-base '>{school.description}</p>
          </div>)
        }
      </div>
      <hr />
    </div>
  );
};

export default About;
