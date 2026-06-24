import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import QRCodeGenerator from "qrcode";
import { useTranslation } from "react-i18next";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  const { t } = useTranslation();
  const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [qrImage, setQrImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShortenUrl = async () => {
    
    if (loading || !url.trim()) return;

    try {
      setLoading(true);

      let formattedUrl = url;
      if (!/^https?:\/\//i.test(url)) {
        formattedUrl = "https://" + url;
      }

      const response = await axios.post(`${API_BASE_URL}/shorten`, {
        originalUrl: formattedUrl,
      });
      
      const newShortUrl = response.data.shortUrl;
      setShortUrl(newShortUrl);
      setCopied(false);
      
      const QR = await QRCodeGenerator.toDataURL(newShortUrl);
      setQrImage(QR);
    } catch (error) {
      console.log(error);
      alert(t("error_msg"));
    } finally {
      setLoading(false);
    }
  };

  const handleCopied = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (error) {
      console.error("Failed to copy!", error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ScanShort",
          text: t("btn_share"),
          url: shortUrl,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      handleCopied(); 
      alert(t("copied_alert"));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <HeroCarousel />

      <section id="shorten" className="flex flex-col items-center px-6 pb-16 gap-6 w-full">
        <div className="flex flex-col gap-3 w-full max-w-3xl">
          <input
            type="text"
            className="input input-success w-full"
            placeholder={t("input_placeholder")}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="btn btn-success w-full"
            onClick={handleShortenUrl}
            disabled={loading || !url.trim()}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              t("btn_shorten")
            )}
          </button>
        </div>

        {shortUrl && (
          <div className="flex flex-col items-center max-w-3xl w-full gap-2">
            <p className="font-medium">{t("result_label")}</p>
            <a className="link link-success break-all" href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>

            <div className="flex gap-2 w-full mt-1">
              <button
                onClick={handleCopied}
                className={`btn w-full ${copied ? "btn-success" : "btn-secondary"}`}
              >
                {copied ? t("btn_copied") : t("btn_copy")}
              </button>
              <button
                onClick={handleShare}
                className="btn btn-outline btn-success w-full"
              >
                {t("btn_share")} 🔗
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <p className="mb-2 text-center font-semibold text-cyan-950">
                {t("qr_label")}
              </p>
              <QRCode value={shortUrl} size={200} />
            </div>

            {qrImage && (
              <a
                className="btn btn-accent mt-1 w-full"
                href={qrImage}
                download="qr-code.png"
              >
                {t("btn_download")}
              </a>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
