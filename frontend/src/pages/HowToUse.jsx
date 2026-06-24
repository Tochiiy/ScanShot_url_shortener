import { useTranslation } from "react-i18next";
import { FiLink, FiCopy, FiShare2 } from "react-icons/fi";

const steps = [
  { icon: <FiLink size={28} />, title: "Paste your URL", desc: "Copy any long link and paste it into the input field on the home page." },
  { icon: <FiCopy size={28} />, title: "Shorten it", desc: "Click the Shorten URL button. Your short link and QR code are generated instantly." },
  { icon: <FiShare2 size={28} />, title: "Share it", desc: "Copy the short link, scan the QR code, or hit share to send it anywhere." },
];

const HowToUse = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-black mb-3">How to use <span className="text-success">ScanShort</span></h1>
        <p className="text-base-content/60">Get your short link in 3 simple steps.</p>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-base-300 bg-base-200">
            <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
              {step.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-success mb-1">Step {i + 1}</p>
              <h3 className="text-lg font-bold mb-1">{step.title}</h3>
              <p className="text-base-content/60 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/" className="btn btn-success px-8">Try it now</a>
      </div>
    </div>
  );
};

export default HowToUse;