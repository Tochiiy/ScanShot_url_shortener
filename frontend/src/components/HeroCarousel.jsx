import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroCarousel = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slides = [
    { emoji: "🔗", title: t("slide1_title"), desc: t("slide1_desc"), color: "text-success" },
    { emoji: "📱", title: t("slide2_title"), desc: t("slide2_desc"), color: "text-info" },
    { emoji: "📤", title: t("slide3_title"), desc: t("slide3_desc"), color: "text-warning" },
    { emoji: "⚡", title: t("slide4_title"), desc: t("slide4_desc"), color: "text-error" },
  ];

  const tags = [
    t("tag_free"),
    t("tag_nologin"),
    t("tag_qr"),
    t("tag_instant"),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="w-full flex flex-col items-center justify-center py-14 px-6 gap-6 text-center">
      <div
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(12px)" : "translateY(0px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="text-7xl mb-4">{slide.emoji}</div>
        <h2 className={`text-3xl font-black tracking-tight mb-2 ${slide.color}`}>
          {slide.title}
        </h2>
        <p className="text-base-content/60 max-w-sm mx-auto text-sm leading-relaxed">
          {slide.desc}
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-success w-6" : "bg-base-300 w-2"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="badge badge-outline badge-success text-xs px-3 py-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;