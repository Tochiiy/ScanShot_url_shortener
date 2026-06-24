import { FiGithub, FiHeart } from "react-icons/fi";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-8 text-center">
      <div>
        <h1 className="text-4xl font-black mb-3">
          About <span className="text-success">ScanShort</span>
        </h1>
        <p className="text-base-content/60 leading-relaxed">
          ScanShort is a free, open-source URL shortener
          It generates short links and QR codes instantly.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-base-300 bg-base-200 flex flex-col gap-3">
        <p className="font-bold text-lg">Built by ✌️</p>
        <p className="text-2xl font-black text-success">Tochukwu</p>
        <p className="text-sm text-base-content/60"> developer</p>
        
        <a
          href="https://github.com/tochiiy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-success mx-auto gap-2"
        >
          <FiGithub size={16} />
          GitHub Profile
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-base-content/50">
        <FiHeart size={14} className="text-error" />
        <span>Built with <span className="text-error">❤️</span> </span>
      </div>

      <a href="/" className="btn btn-success px-8 mx-auto">Try ScanShort</a>
    </div>
  );
};

export default About;