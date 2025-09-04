import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// icons
import { FaStumbleupon } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { IoHeartSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

// Components
import Background from "@/Components/Background/Background";
import AppInput from "../../Components/Inputs/AppInput";
import LoginImage from "../../Components/Images/LoginImage";

function FeatureIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-3 group-hover:bg-opacity-30 transition-all duration-300">
        {icon}
      </div>
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  );
}

function FeatureIcons() {
  const features = [
    { Icon: ImUsers, label: "Connect with friends" },
    { Icon: TbWorld, label: "Global community" },
    { Icon: IoHeartSharp, label: "Share passions" },
    { Icon: BsStars, label: "Inspire others" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-12">
      {features.map((feature, index) => (
        <FeatureIcon
          key={index}
          icon={<feature.Icon className="w-8 h-8 text-purple-600" />}
          label={feature.label}
        />
      ))}
    </div>
  );
}

function CTAButton() {
  return (
    <div className="flex gap-4 justify-center">
      <Link
        to="/login"
        className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-200 shadow-lg"
      >
        Get Started
      </Link>
    </div>
  );
}

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
  }, [taglines.length]);

  return (
    <main className="flex gap-20 items-center py-5 px-42 h-[calc(100vh-20px)]">
      <aside className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl flex flex-col p-15 h-full justify-center items-center w-[550px]">
        {/* Animated Tagline */}
        <p className="text-xl md:text-5xl w-[400px] text-blue-100 mb-12 font-semibold h-12 transition-opacity duration-500 relative top-5">
          <span
            key={currentTaglineIndex}
            className="inline-block opacity-0 animate-fadeIn"
          >
            {taglines[currentTaglineIndex]}
          </span>
        </p>

        <LoginImage className="w-full" />
      </aside>

      <form className="w-[28rem] flex flex-col gap-7">
        {/* Logo Container */}
        <header className="flex items-center gap-5">
          <FaStumbleupon className="text-5xl text-purple-600" />

          {/* App Name */}
          <h1 className="text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              MY Social
            </span>
          </h1>
        </header>
        <AppInput label="Email" placeholder="Enter your email" />
        <AppInput label="Password" placeholder="Enter your password" />
      </form>
    </main>
  );
}
