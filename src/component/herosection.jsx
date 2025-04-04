"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./HeroSection.module.css"; // Import CSS Module
import Universite from "../assets/8ZLwsvOTvPSTMB0it1CLPuGLUI (1).avif";
import HEC from "../assets/AVRpTPTCNLqV8aen1CGgXRSga8.avif";
import Enlyon from "../assets/vrnrq0YOIG4Vg8PZaz8MIMa6D30.avif";
import Sorbonne from "../assets/ytRa0YyNcbsJeCQQrrrPoLinBU.avif";
import Insa from "../assets/YtK1bd35SfixaLbKFRwGHEV1Y.png";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosStarHalf } from "react-icons/io";



const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const badges = [
    { image: Universite },
    { image: HEC },
    { image: Enlyon },
    { image: Sorbonne },
    { image: Insa },
  ];

  const headings = [
    {
      text: "Créez des",
      span: "Notes structurées",
      after: "depuis",
      span2: "vos cours ",
      end: "avec L’IA",
    },
   
    {
      text: "Créez des",
      span: "Flashcards",
      after: "depuis",
      span2: "un PDF",
      end: "avec L’IA",
    },
     {
      text: "Créez des",
      span: "fiches de Révision",
      after: "depuis ",
      span2:"votre micro ",
      end: "avec L’IA",
    },
    
    {
      text: "Créez des",
      span: "Quiz",
      after: "depuis",
      span2: " une vidéo Youtube",
      end: "avec L’IA",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); // Change every 1.5s
    return () => clearInterval(interval);
  }, []);

  // const textVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  //   exit: { opacity: 0, y: -50, transition: { duration: 0.9 } },
  // };

  return (
    <section
      className={`relative justify-center pt-20 items-center w-full  bg-[#f4f2f1]`}
    >
      <div
        className={`relative z-10 flex flex-col items-center  w-full text-center   bg-[#f4f2f1] ${styles.bgGrid}`}
      >
       <div className="mt-12 w-300 px-4 z-50  md:w-[800px] overflow-hidden">
  <AnimatePresence mode="wait">
    <h1
      key={index}
      className="text-[34px]  md:text-[64px] font-bold leading-tight text-black mb-6"
    >
      {headings[index].text}{" "}
      {index % 2 === 0 && <br />}

      {/* First Animated Span */}
      <motion.span
        className="inline-block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span className="bg-gradient-to-r from-[#FB0F5E] to-[#EA2E6E] text-transparent bg-clip-text">
          {headings[index].span} {" "}
         
        </motion.span>
        {index !== 3 && <br />}
      </motion.span>

      {headings[index].after} {" "}

      {/* Second Animated Span */}
      <motion.span
        className="inline-block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span className="bg-gradient-to-r  from-[#FB0F5E] to-[#EA2E6E] text-transparent bg-clip-text">
          {headings[index].span2} {" "}
         
        </motion.span>
        
      </motion.span>
      {index !== 1 && <br />}
       {headings[index].end}
    </h1>
  </AnimatePresence>
</div>
        {/* <div className="relative z-10    flex flex-col items-center text-center"> */}
      
        <p className="text-[18px] w-[390px] z-50 md:w-[800px]  font-[500] px-5 text-[#3d3d3d]">
        🎓 <strong className="font-[700] ">Harvard, MIT, Stanford...</strong> <span className="font-[700]">Leurs étudiants ont un secret !</span>  
        Ils utilisent l’IA pour apprendre plus vite et mieux retenir leurs cours. Pourquoi pas toi ? 🚀
      </p>
     
      <div className="flex justify-center z-50 items-center ">
      <div className="mt-4 px-2 w-[320px] lg:w-[400px] text-[13px] md:text-[17px]  font-[600] py-1 border border-gray-300 rounded-full">
      <span className="bg-gradient-to-r front-[500]  leading-[26px] from-pink-500 to-red-500 text-transparent bg-clip-text">150,000+</span> Quiz et fiches de révisions générés
      </div>
      </div>
      <button className="relative mt-7 z-50 md:mt-7  mb-0 lg:mb-2   px-4 py-4 font-semibold text-white rounded-lg shadow-md transition-all duration-300
  bg-gradient-to-r from-[#E92e6e]  to-[#fd045a]  group">
  <span className="absolute inset-0 bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative  font-[500] text-[17px] md:text-[18px]">  Essayer Gratuitement</span>
</button>

<div className="flex justify-center  items-center text-center">
        <div className=" z-10 w-full lg:w-[640px]  flex flex-col justify-center  items-center text-center">
          <div className="flex justify-center item-center ">
            <div className="flex items-center text-sm font-medium justify-center gap-2 text-gray-700">
              <div className="lg:flex  justify-center items-center  ">
                <div className="flex justify-center gap-1 items-center py-2">
                  <span className="text-lg font-[500]">G</span>

                 <div className="flex justify-between items-center">
                 <TiStarFullOutline className="text-[17px] text-black"/>
                 <TiStarFullOutline  className="text-[17px] text-black"/>
                 <TiStarFullOutline  className="text-[17px] text-black"/>
                 <TiStarFullOutline className="text-[17px] text-black"/>
                 <IoIosStarHalf className="text-[17px] text-black"/>
                 </div>
                </div>
                <span className="text-md font-medium"> 4.9/5</span>Basés sur les
                avis de <span className="text-md font-medium">13,145</span>{" "}
                étudiants
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <h1 className="font-[500] z-50  text-[18px] mt-2 ">Utilisés par des étudiants de</h1>
<div className="w-full  overflow-hidden z-50  max-w-5xl mask-gradient">
<div className="flex space-x-10 mt-10 overflow-hidden animate-marquee">
  {[...badges, ...badges, ...badges].map((item, index) => (
    <div
      key={index}
      className="rounded-lg flex justify-center items-center"
    >
      <div
        className={`
           ${index % badges.length === 2
            ? "w-[100px] h-[130px] sm:w-[80px] sm:h-[100px]" // Chhota size for every index `2`
            : "w-[130px] h-[130px] sm:w-[110px] sm:h-[100px]"} // Normal size otherwise
        `}
      >
        <img
          src={item.image}
          alt="Badge"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  ))}
</div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        .animate-marquee {
          display: flex;
          gap: 25px;
          min-width: 200%;
          animation: marquee 20s linear infinite;
        }

        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
</div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
