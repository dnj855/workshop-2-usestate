"use client";

export const ImageGenerator = ({ image, settings }) => {
  return (
    <>
      {!image.src ? (
        <p>You must upload an image first.</p>
      ) : (
        <div
          style={{
            display: "flex",
            padding: `${settings.padding}px`,
          }}
        >
          <img
            alt=""
            src={image.src}
            width={image.width}
            height={image.height}
            style={{
              boxShadow: `0 0 ${settings.shadow}px`,
              borderRadius: `${settings.radius}px`,
            }}
          />
        </div>
      )}
    </>
  );
};
