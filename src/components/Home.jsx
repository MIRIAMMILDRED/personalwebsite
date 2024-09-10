import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import img10 from '../assets/portfolio_pic.jpg';

import img9 from '../assets/brandpic.jpg';

const Home = () => {
    return (
        <section className='md:px-10 px-7 my-10 md:h-full bg-[#1a1a29] mb-20' id='home'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                    <h1 className='font-semibold md:text-5xl my-4 text-3xl text-green-500'>
                        <Typewriter
                            words={['Miriam Mildred Akinyi']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={120}
                            deleteSpeed={80}
                            delaySpeed={1500}
                        />
                    </h1>
                    <div className='md:w-96 flex'>
                        <p className='text-yellow-400'>Fullstack Developer,</p>
                        <p className='text-blue-400'>Graphic Designer,</p>
                        <p className='text-red-400'>Security Analyst.</p>
                        
                    </div>
                    <div className='mt-5'>
                        <a href="https://docs.google.com/document/d/12-RbWI27r3g3Q5HR4r3frFbMopo_J51y/edit?usp=sharing&ouid=104699116345134625213&rtpof=true&sd=true">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative rounded-lg shadow-xl overflow-hidden'>
                    <div className='image-carousel'>
                        <img src={img10} alt="Miriam Mildred" loading="lazy" />
                        <img src={img9} alt="Miriam Mildred" loading="lazy" />
                        <img src={img10} alt="Miriam Mildred" loading="lazy" />
                        <img src={img9} alt="Miriam Mildred" loading="lazy" />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
