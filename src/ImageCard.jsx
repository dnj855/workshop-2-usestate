"use client";

import { useState } from "react";
import { ImageGenerator } from "./ImageGenerator";
import { renderPNG } from "@/app/render-png";

export const ImageCard = ({ image, settings }) => {
  const [loading, setLoading] = useState({
    download: false,
    clipboard: false,
  });

  const copyToClipboard = async () => {
    if (!image) return;
    const newLoading = { ...loading, clipboard: true };
    setLoading(newLoading);
    const { blob } = await renderPNG({ image, settings });
    const data = [new ClipboardItem({ "image/png": blob })];
    await navigator.clipboard.write(data);
    const updatedLoading = { ...loading, clipboard: false };
    setLoading(updatedLoading);
  };

  const downloadImage = async () => {
    if (!image) return;
    const newLoading = { ...loading, download: true };
    setLoading(newLoading);
    const { blob } = await renderPNG({ image, settings });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${image.name || "image"}.png`;
    a.click();
    const updatedLoading = { ...loading, download: false };
    setLoading(updatedLoading);
  };

  return (
    <div className="flex flex-col justify-center items-center card bg-base-100 min-w-96 max-w-xl shadow-xl gap-4">
      <div className="card-body">
        <ImageGenerator image={image} settings={settings} />
        {!image ? (
          ""
        ) : (
          <div className="flex gap-2 justify-center">
            <button
              className="btn btn-primary"
              disabled={loading.download}
              onClick={downloadImage}
            >
              {loading.download ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                <span>Download</span>
              )}
            </button>
            <button
              className="btn btn-secondary"
              disabled={loading.clipboard}
              onClick={copyToClipboard}
            >
              {loading.clipboard ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                <span>Copy to Clipboard</span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
