import { Globe, Facebook, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  const baseCircle =
    "w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 transition-transform";

  return (
    <div className="flex items-center gap-3 mt-4 md:mt-0">
      {/* Site */}
      <a
        href="https://itsmeow.tech"
        target="_blank"
        className={`${baseCircle} bg-white dark:bg-gray-800`}
      >
        <Globe size={20} className="text-gray-700 dark:text-gray-200" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/azrilpramudia"
        target="_blank"
        className={`${baseCircle} bg-gray-800`}
      >
        <Github size={20} className="text-gray-100 dark:text-gray-100" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/azril.pramudia.01"
        target="_blank"
        className={`${baseCircle} bg-white dark:bg-blue-600`}
      >
        <Facebook size={20} className="text-white dark:text-white" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/azril-pramudia-anugrah-202a872a6/"
        target="_blank"
        className={`${baseCircle} bg-[#0A66C2] text-white`}
      >
        <Linkedin size={20} className="text-white" />
      </a>

      {/* X (Twitter icon) */}
      <a
        href="https://twitter.com/azrilpramudia"
        target="_blank"
        className={`${baseCircle} bg-white dark:bg-black`}
      >
        <FaXTwitter size={20} className="text-black dark:text-white" />
      </a>
    </div>
  );
};

export default SocialIcons;
