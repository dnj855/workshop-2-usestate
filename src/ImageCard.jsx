"use client";

export const ImageCard = ({ image, settings }) => {
  return (
    <div className="card bg-base-100 min-w-96 w-full shadow-xl">
      <div className="card-body">
        <img src={image.src} />
      </div>
    </div>
  );
};
