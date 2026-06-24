import express from "express";
import url from "../models/url.js";
import { nanoid } from "nanoid";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  
  res.status(200).json({ status: "ok", message: "welcome:ScanShortly api mounted💘" });
});

router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: "valid url is required" });
    }

    try {
      new URL(originalUrl);
    } catch (error) {
      return res.status(400).json({ error: "invalid url" });
    }

    
    const existingOriginalUrl = await url.findOne({ originalUrl });
    if (existingOriginalUrl) {
      return res.status(200).json({
        originalUrl: existingOriginalUrl.originalUrl,
        shortId: existingOriginalUrl.shortId,
        shortUrl: existingOriginalUrl.shortUrl,
      });
    }

    let shortId;
    let existingShortId;

    do {
      shortId = nanoid(8);
      existingShortId = await url.findOne({ shortId });
    } while (existingShortId);

    const shortUrl = `${process.env.BASE_URL}/${shortId}`;

    const newUrl = new url({
      originalUrl,
      shortId,
      shortUrl, 
    });

    await newUrl.save();

    return res.status(201).json({
      originalUrl,
      shortId,
      shortUrl,
    });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ error: "There was a server error" });
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;
    
    
    const urlDoc = await url.findOneAndUpdate(
      { shortId },
      { $inc: { clicks: 1 } }
    );

    if (urlDoc) {
      return res.redirect(urlDoc.originalUrl);
    } else {
      return res.status(404).json({ error: "url not found" });
    }
  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ error: "There was a server error" });
  }
});

export default router;