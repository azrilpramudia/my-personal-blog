import { MapPin, BadgeCheck } from "lucide-react";
import coverImg from "../assets/background.webp";
import profileImg from "../assets/profile.webp";

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
        {/* Profile image */}
        <div className="absolute -top-16 md:-top-20">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 shadow-lg"
          />
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

          {/* Social links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-600 dark:text-gray-500">
            <a href="#" className="hover:text-blue-600">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-600">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-600">
              Facebook
            </a>
          </div>
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
