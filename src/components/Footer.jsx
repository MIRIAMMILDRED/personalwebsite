import React from "react";
import facebook from '../assets/socials/facebook.png';
import github from '../assets/socials/github.png';
import twitter from '../assets/socials/twitter.png';
import linkedin from '../assets/socials/linkedin.png';
import call from '/call.png';

const Footer = () => {
  let date = new Date();
  return (
    <>
      <div className="md:px-10 px-3 mt-15">
        <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
          <p>@ Copyright {date.getFullYear()} | MiriamMildred</p>
          <p className="hidden sm:block">Fullstack Developer</p>
          <p className="hidden sm:block">Book a call  <a className="" href="https://wa.me/0743722708" target="_blank" rel="noreferrer">
          <img src={call} alt="" width={20} />
        </a></p>
        </div>
        {/* social media */}

      </div>
      <div className="flex justify-center ">
        <a className="" href="https://github.com/miriammildred" target="_blank" rel="noreferrer">
          <img src={github} alt="" width={20} />
        </a>
        <a className="mx-2" href="https://www.linkedin.com/in/miriam-akinyie-aa749818b/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" width={20} />
        </a>
        <a className="" href="https://twitter.com/justmildredo_" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" width={20} />
        </a>
        <a className="mx-2" href="https://web.facebook.com/miriamakinyi/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="" width={20} />
        </a>
      </div>
    </>
  );
};

export default Footer;
