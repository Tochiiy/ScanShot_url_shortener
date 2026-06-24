import { FiZap, FiLink, FiSmartphone, FiShare2, FiShield, FiClock } from "react-icons/fi";

const features = [
  { icon: <FiZap size={24} />, title: "Instant shortening", desc: "Generate short links in milliseconds with no delay." },
  { icon: <FiLink size={24} />, title: "Clean short URLs", desc: "Get readable, shareable links every time." },
  { icon: <FiSmartphone size={24} />, title: "QR code included", desc: "Every link gets a downloadable QR code automatically." },
  { icon: <FiShare2 size={24} />, title: "Native share", desc: "Share directly to WhatsApp, Telegram, and more." },
  { icon: <FiShield size={24} />, title: "No login required", desc: "No accounts, no tracking, no paywalls." },
  { icon: <FiClock size={24} />, title: "Click tracking", desc: "Each short link tracks how many times it's been clicked." },
];

const Features = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
      <div className="text-center">
        <h1 className="text-4xl font-black mb-3">
          Why use <span className="text-success">ScanShort</span>?
        </h1>
        <p className="text-base-content/60">Everything you need, nothing you don't.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-base-300 bg-base-200">
            <div className="w-10 h-10 rounded-lg bg-success/10 text-success flex items-center justify-center shrink-0">
              {f.icon}
            </div>
            <div>
              <h3 className="font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-base-content/60">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href="/" className="btn btn-success px-8">Start shortening</a>
      </div>
    </div>
  );
};

export default Features;