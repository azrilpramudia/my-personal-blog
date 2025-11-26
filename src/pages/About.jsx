import { useState } from 'react';
import { MapPin, BadgeCheck, Snowflake } from 'lucide-react';
import coverImg from '../assets/background.webp';
import profileImg from '../assets/profile.webp';
import SocialIcons from '../components/SocialIcons';

const About = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [isBadgeActive, setIsBadgeActive] = useState(false);

  return (
    <div className="font-poppins min-h-screen">
      {/* --- COVER --- */}
      <div className="w-full">
        <div className="relative mx-auto h-52 max-w-5xl md:h-72">
          <img
            src={coverImg}
            alt="Cover"
            className="h-full w-full rounded-b-lg object-cover"
          />
        </div>
      </div>

      {/* --- PROFILE HEADER SECTION --- */}
      <div className="relative mx-auto max-w-5xl px-4">
        {/* WRAPPER for HOVER + MOBILE CLICK */}
        <div
          className="group absolute -top-16 md:-top-20"
          onMouseEnter={() => setShowBubble(true)}
          onMouseLeave={() => setShowBubble(false)}
        >
          {/* --- SPEECH BUBBLE (Desktop hover + Mobile click) --- */}
          {(showBubble || isBadgeActive) && (
            <div className="animate-pop absolute -top-7 left-20 z-20 md:-top-7 md:left-27">
              <div className="relative inline-block rounded-full bg-gray-800 px-4 py-1 text-sm whitespace-nowrap text-white shadow-lg">
                Just a code dude
                <span className="absolute -bottom-1.5 left-6 h-0 w-0 border-t-8 border-r-8 border-l-8 border-t-gray-800 border-r-transparent border-l-transparent"></span>
              </div>
            </div>
          )}

          {/* --- PROFILE IMAGE + BADGE --- */}
          <div className="relative h-32 w-32 cursor-pointer md:h-40 md:w-40">
            {/* Profile image */}
            <img
              src={profileImg}
              alt="Profile"
              className="h-full w-full rounded-full object-cover shadow-lg ring-4"
              onClick={() => setShowBubble(!showBubble)}
            />

            {/* BADGE ICONS */}
            <div
              className={`absolute right-0 bottom-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isBadgeActive ? 'bg-blue-600' : 'bg-gray-800 group-hover:bg-blue-600'} `}
              onClick={() => setIsBadgeActive((prev) => !prev)}
            >
              <Snowflake
                size={20}
                className={`text-white transition-transform duration-300 ${isBadgeActive ? 'rotate-180' : 'group-hover:rotate-180'} `}
              />
            </div>
          </div>
        </div>

        {/* NAME + LOCATION + SOCIALS */}
        <div className="flex flex-col justify-between pt-20 md:flex-row md:items-center md:pt-24">
          <div>
            <h1 className="flex items-center gap-2 text-3xl font-semibold">
              ItsMeow <BadgeCheck size={24} className="text-blue-500" />
            </h1>

            <p className="mt-1 flex items-center gap-2 text-gray-600 dark:text-gray-500">
              <MapPin size={18} /> Bandung, West Java, Indonesia
            </p>
          </div>

          <SocialIcons />
        </div>
      </div>

      {/* --- ABOUT CONTENT --- */}
      <div className="mx-auto mt-10 max-w-5xl px-4">
        <h2 className="text-2xl font-semibold">About</h2>

        <p className="mt-4 leading-relaxed">
          Hi there! I'm Azril Pramudia, a passionate Software Engineer and Linux
          enthusiast with a love for creating innovative solutions. With
          experience in web development and basic IoT (Internet of Things), I
          specialize in building responsive and user-friendly applications.
        </p>

        <p className="mt-4 leading-relaxed">
          I'm a student at the Islamic University of Bandung, majoring in
          Informatics Engineering, and I'm always eager to learn and grow in
          this ever-evolving field.
        </p>

        <p className="mt-4 leading-relaxed">
          When I'm not coding, you’ll usually find me exploring the latest tech
          trends, contributing to open-source projects, or enjoying my hobbies
          like gaming and music.
        </p>

        <p className="mt-4 leading-relaxed">
          Thank you for visiting, and happy coding!
        </p>
      </div>
    </div>
  );
};

export default About;
