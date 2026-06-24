
import express from "express";
import url from "../models/url.js";
import { nanoid } from "nanoid";

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.status(200).json("welcome:ScanShortly api mounted💘");
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

    let shortId;
    let existingUrl;

    do {
      shortId = nanoid(8);
      existingUrl = await url.findOne({ shortId });
    } while (existingUrl);

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
    console.log("ERROR:", error);
    return res.status(500).json({ error: "There was a server error" });
  }
});

router.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlDoc = await url.findOne({ shortId });
    if (urlDoc) {
      urlDoc.clicks += 1;
      await urlDoc.save();
      return res.redirect(urlDoc.originalUrl);
    } else {
      return res.status(404).json({ error: "url not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "There was a server error" });
  }
});

export default router;
