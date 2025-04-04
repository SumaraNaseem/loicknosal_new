
import { motion, useScroll, useTransform } from "framer-motion";

import NouvelleNote from "../assets/MLJrXgN3xMU5IbPdQlm0astboM.avif"
import NouvelleNoteAvec from "../assets/adfHYJnukFS99w5TS4Ew9UHVYo.avif"
import Depuis from "../assets/hFnhbjwZqGKa4VCjcjMKjrXaM.avif"
import { FaRegFolderOpen , } from "react-icons/fa";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { GoTag } from "react-icons/go";
import { useRef } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const badges = [
  { text: "Un Site Web", color: "bg-blue-500" },
  { text: "Wikipedia", color: "bg-purple-500" },
  { text: "Un PDF", color: "bg-red-500" },
  { text: "Votre Micro", color: "bg-yellow-500" },
  { text: "Youtube", color: "bg-purple-500" },
  { text: "Un Site Web", color: "bg-blue-500" },
  { text: "Wikipedia", color: "bg-purple-500" },
  { text: "Un PDF", color: "bg-red-500" },
  { text: "Votre Micro", color: "bg-yellow-500" },

];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const features = [
    {
      icon: <FaRegFolderOpen />,
      title: "Stockez vos cours",
      description:
        "Gardez vos cours en sécurité dans notre application, accédez-y facilement et entraînez-vous à tout moment, où que vous soyez.",
    },
    {
      icon: <PiUserCirclePlusBold />,
      title: "Prise de note du cours automatique avec L'IA",
      description:
        "Activez le micro, Neuronote écoute et prend des notes pour vous en temps réel.",
    },
    {
      icon: <LuAlarmClock />,
      title: "Créez des Quiz basés sur vos cours",
      description:
        "Testez vos connaissances sans limite grâce à des quiz interactifs.",
    },
    {
      icon: <GoTag />,
      title: "Générez des fiches de révision parfaite et des flashcards",
      description:
        "Pour réviser efficacement et organiser vos idées en un clin d’œil.",
    },
  ];

  
  return (
    <div className="bg-[#111111] text-white py-12 sm:px-6 md:px-[2rem] xl:px-[330px] text-center">
      {/* Header Section */}
      <div className="flex flex-col items-center">
     <button className="relative  py-[1px] text-white font-semibold rounded-full border-2 border-transparent bg-black">
  <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 via-orange-500 to-purple-500"></span>
  <span className="relative bg-[#1e1e1e] block px-3 text-[16px] font-[500]  py-2 rounded-full">Découvrez Neuronote</span>
</button> 
<div className="w-[300px] md:w-[600px] flex  leading-[50px] justify-center items-center">
<h1 className="text-[28px] md:text-[40px] leading-[35px] md:leading-[62px] lg:text-[52px]  font-[600] mt-4">L&apos;IA pour booster tes notes.</h1>

</div>
 <button className="relative mt-4 md:mt-7 px-5 py-4  text-white rounded-lg shadow-md transition-all duration-300
  bg-gradient-to-r from-[#E92e6e] to-[#fd045a]  group">
  <span className="absolute inset-0 bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative text-[18px] leading-[27px] font-[500]">  Essayer Gratuitement</span>
</button>
      </div>
      <div ref={containerRef} className="flex justify-center items-center">
      <div className="relative hidden mt-10 md:flex justify-center">
        {/* Left Floating Image */}
        <motion.div
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          style={{ y: leftY }} // Applying scroll effect
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute lg:-left-[5rem] md:-left-[1rem] top-10 z-10 lg:top-28 md:w-[10rem] lg:w-[15rem] h-[400px]"
        >
          <img src={Depuis} alt="Left floating card" className="w-64 md:w-[12rem] lg:w-[21rem]" width={100} height={100} />
        </motion.div>

        {/* Main Dashboard Image */}
        <div className="relative">
          <img src={NouvelleNote} alt="Main dashboard" className="max-w-full  h-auto md:w-[712px] lg:w-[1000px]" width={1100} height={400} />
        </div>

        {/* Right Floating Image */}
        <motion.div
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          style={{ y: rightY }} // Applying scroll effect
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute lg:-right-[5rem]  md:-right-[2rem] top-5 lg:top-28 md:w-[10rem] lg:w-[21rem] h-[460px]"
        >
          <img src={NouvelleNoteAvec} alt="Right floating card" className="max-w-full  h-auto" width={1800} height={1700} />
        </motion.div>
      </div>
    </div>


      
    <div className="text-white pt-12 pb-3">

    <div className="relative grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
  {/* Gradient Line in Center */}
  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-[330px] w-[2px] bg-gradient-to-b from-orange-700 via-purple-700 to-orange-700"></div>

  {features.map((feature, index) => (
    <div
      key={index}
      className={`flex border-t  border-[#1e1e1e] justify-center items-center 
        ${index === 1 ? "md:border-r-0 " : ""} 
        ${index !== 3 ? "lg:border-r" : ""} // Last column on large screens won't have border-right
      `}
    >
      <div
        className={`${
          index === 0
            ? "lg:pl-0 py-12 pr-6  md:pl-0 lg:p-6"
            : "md:py-8 lg:p-6  md:pr-0 sm:py-6"
        } h-[300px] space-y-3  mt-[8px]`}
      >
        <div className="text-white font-[400] text-[30px]">{feature.icon}</div>
        <h3 className="font-[600] leading-[30px] text-start text-[20px] md:text-[18px] lg:text-[20px]">
          {feature.title}
        </h3>
        <p className="text-[#808080] font-[500] leading-[26px] text-[18px] md:text-[16px] lg:text-[17px] text-start">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>




{/* Right Arrow (Hidden on index 4) */}
{features.length > 4 && (
  <div className="flex justify-end mt-2">
    <span className="text-white text-2xl pr-4">{/* Arrow Icon */} →</span>
  </div>
)}


  {/* Divider with Button */}
  <div className="relative flex items-center justify-between w-full">
    {/* Left Line + Dot */}
    <div className="flex items-center mt-3 w-full max-w-4xl">
      <div className="w-full h-[1px] bg-[#1e1e1e]"></div>
      <div className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full"></div>
    </div>

    {/* Center Button with Border */}
    <div className="relative  flex items-center mt-3 justify-center mx-4">
  {/* Top Gradient Border */}
  <div className="absolute z-10 top-0  left-1/2 transform -translate-x-1/2 w-[70%] h-[1px] rounded-full border-bottom boeder-l border-r border-[#1e1e1e] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

  {/* Button */}
  <button className="relative px-[1px] border-[1px] border-[#3d3d3d] py-[1px]  text-white font-semibold rounded-full">
    <span className="absolute inset-0 rounded-full bg-[#1e1e1e]"></span>
    <span className="relative text-nowrap   block px-3 text-[16px] py-2 rounded-full">
      Importez vos cours depuis :
    </span>
  </button>
</div>
    {/* Right Line + Dot */}
    <div className="flex items-center mt-3 justify-end w-full max-w-3xl">
      <div className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full"></div>
      <div className="w-full h-[1px] bg-[#1e1e1e]"></div>
    </div>
  </div>
</div>
<div className="flex justify-center w-full items-center">
<div className="relative w-full mb-10 overflow-hidden mask-gradient">
      <div className="marquee">
        <div className="marquee__content">
          {[...badges, ...badges, ...badges].map((item, index) => ( // 3 Copies for smooth scrolling
            <div
              key={index}
              className="marquee__item bg-[#1e1e1e] text-white px-6 py-4 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center gap-2">
                <div className={`${item.color} w-2 h-2 rounded-full`}></div>
                <p className="text-nowrap">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }

        .marquee {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .marquee__content {
          display: flex;
          gap: 16px;
          min-width: 200%;
          animation: marquee 20s linear infinite;
        }

        .marquee__item {
          flex: 0 0 auto;
        }

        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        `}
      </style>

</div>
</div>









    
    </div>
  );
}

