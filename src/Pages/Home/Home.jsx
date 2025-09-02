import { FaStumbleupon } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { IoHeartSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../../Components/Background/Background";

export default function Home() {
  const taglines = [
    "Connect. Share. Inspire.",
    "Share your life moments.",
    "Discover amazing stories.",
    "Build meaningful connections.",
  ];

  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) =>
        prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background maxWidth="max-w-4xl">
      {/* Logo Container */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <FaStumbleupon className="text-5xl text-purple-600" />
        </div>
      </div>

      {/* App Name */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4">
        <span className="text-white">MY</span>
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Social
        </span>
      </h1>

      {/* Animated Tagline */}
      <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light h-12 transition-opacity duration-500">
        <span
          key={currentTaglineIndex}
          className="inline-block opacity-0 animate-fadeIn"
        >
          {taglines[currentTaglineIndex]}
        </span>
      </p>

      {/* Feature Icons */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300">
            <ImUsers className="w-8 h-8 text-purple-600" />
          </div>
          <span className="text-white text-sm font-medium">
            Connect with friends
          </span>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300">
            <TbWorld className="w-8 h-8 text-purple-600" />
          </div>
          <span className="text-white text-sm font-medium">
            Global community
          </span>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300">
            <IoHeartSharp className="w-8 h-8 text-purple-600" />
          </div>
          <span className="text-white text-sm font-medium">Share passions</span>
        </div>

        <div className="flex flex-col items-center text-center group">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300">
            <BsStars className="w-8 h-8 text-purple-600" />
          </div>
          <span className="text-white text-sm font-medium">Inspire others</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 justify-center">
        <Link
          to="/login"
          className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-200 shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </Background>
  );
}
