/* eslint-disable @next/next/no-img-element */
export const ImageGenerator = ({ image, settings }) => {
  if (!image) {
    return <p className="text-center p-4">Upload an image first.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: `${settings.padding}px`,
      }}
    >
      <img
        src={image.src}
        style={{
          boxShadow: `0 0 ${settings.shadow}px rgba(0,0,0,.${settings.shadow})`,
          borderRadius: `${settings.radius}px`,
          display: "flex",
        }}
      />
    </div>
  );
};
