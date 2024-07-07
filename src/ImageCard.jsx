"use client";

import { ImageGenerator } from "./ImageGenerator";
import { renderPNG } from "@/app/render-png";

export const ImageCard = ({ image, settings }) => {
  return (
    <div className="flex flex-col justify-center items-center card bg-base-100 min-w-96 max-w-xl shadow-xl gap-4">
      <div className="card-body">
        <ImageGenerator image={image} settings={settings} />
        <button
          className="btn"
          disabled={!image.src}
          onClick={async () => {
            const { blob } = await renderPNG({
              image,
              settings,
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${image.name || "image"}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};
