import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ModelCanvas } from './canvas';

import { cvgabor } from '../assets';
const Hero = () => {
    const downloadCV = () => {
        window.location.assign(
            'https://drive.google.com/u/0/uc?id=15n76jeb04E_8BeMjkzsuW624WmuIgHvc&export=download'
        );
    };

    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-1">
                    <div className="w-6 h-6 mb-3 pt-3 square-full bg-[#00957a]" />
                    <div className="w-5 h-5 mb-3 pt-3 square-full bg-[#009572]" />
                    <div className="w-4 h-4 mb-3 pt-3 square-full bg-[#009572]" />
                    <div className="w-3 h-3 mb-3 pt-3 square-full bg-[#009572]" />
                    <div className="w-2 h-2 mb-3 pt-3 square-full bg-[#009572]" />
                    <div className="w-1 h-1 mb-3 pt-3 square-full bg-[#009572]" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} z-20`}>
                        Hi, I&apos;m{' '}
                        <span className="text-[#009579]"> Gabor</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} mt-2 text-white-100 mr-12`}
                    >
                        I am a developer, music producer and hobby chef .
                    </p>
                </div>
                <div className="">{/*    <ModelCanvas /> */}</div>
                <img
                    className="absolute hidden brightness-75  lg:block w-[50%] bottom-0 left-[-15%]"
                    src={cvgabor}
                />

                <button
                    onClick={downloadCV}
                    className="bg-matrix font-bold rounded-xl   hover:brightness-125 absolute bottom-[150px] right-[100px] text-[24px] px-6 py-2"
                >
                    {' '}
                    <span className="animate-pulse w-6 h-6  text-[36px] p-1 mr-2 text-black font-bold">
                        {' '}
                        &#x21E9;
                    </span>{' '}
                    Download CV
                </button>

                {/*  <div className="absolute xs:bottom-10 bottom-32 left-64 w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[35px] h-[64px]  border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div
                                animate={{ y: [0, 30, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-4  bg-matrix mb-1"
                            />
                        </div>
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;