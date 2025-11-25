import { MapPin, BadgeCheck, Snowflake } from "lucide-react";
import coverImg from "../assets/background.webp";
import profileImg from "../assets/profile.webp";
import SocialIcons from "../components/SocialIcons";

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* --- COVER --- */}
      <div className="w-full">
        <div className="max-w-5xl mx-auto h-52 md:h-72 relative">
          <img
            src={coverImg}
            alt="Cover"
            className="w-full h-full object-cover rounded-b-lg"
          />
        </div>
      </div>

      {/* --- PROFILE HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Group wrapper so bubble reacts to profile hover */}
        <div className="absolute -top-16 md:-top-20 group">
          {/* Speech Bubble */}
          <div className="absolute -top-5 left-22 z-20">
            <div
              className="
      relative 
      bg-gray-800 text-white 
      text-sm 
      px-4 py-1 
      rounded-full 
      shadow-lg 
      inline-block
      whitespace-nowrap              
      transition-all duration-300
      opacity-0 scale-90             
      group-hover:opacity-100 
      group-hover:scale-100          
    "
            >
              Just a code dude
              {/* Tail */}
              <span
                className="
        absolute left-5 -bottom-2 
        w-0 h-0 
        border-l-8 border-r-8 border-t-8 
        border-l-transparent border-r-transparent border-t-gray-800
      "
              ></span>
            </div>
          </div>

          {/* --- PROFILE IMAGE + BADGE --- */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer">
            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover ring-4 shadow-lg"
            />

            {/* Badge Icon (bottom-right) */}
            <div
              className="
          absolute bottom-0 right-0 
          w-10 h-10 md:w-10 md:h-10
          bg-gray-800 
          rounded-full 
          flex items-center justify-center
          shadow-lg
          cursor-pointer
          hover:scale-110 
          transition-transform duration-300
        "
            >
              <Snowflake size={20} className="text-white" />
            </div>
          </div>
        </div>

        {/* Name + Location + Social icons */}
        <div className="pt-20 md:pt-24 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold flex items-center gap-2">
              ItsMeow
              <BadgeCheck size={24} className="text-blue-500" />
            </h1>

            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-500 mt-1">
              <MapPin size={18} />
              Bandung, West Java, Indonesia
            </p>
          </div>

          <SocialIcons />
        </div>
      </div>

      {/* --- ABOUT CONTENT --- */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-semibold">About</h2>

        <p className="mt-4 leading-relaxed">
          Welcome to The Daily Dev! This blog is dedicated to sharing insights,
          tutorials, and stories from the world of software development. Whether
          you're a seasoned developer or just starting out, we hope you'll find
          something valuable here.
        </p>

        <p className="mt-4 leading-relaxed">
          Our mission is to foster a community of developers who are passionate
          about learning and growing together. We cover a wide range of topics,
          from front-end and back-end development to DevOps and best practices.
        </p>

        <p className="mt-4 leading-relaxed">
          Thank you for visiting, and happy coding!
        </p>
      </div>
    </div>
  );
};

export default About;
