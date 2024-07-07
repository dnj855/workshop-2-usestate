"use client";

import { ImageCard } from "@/src/ImageCard";
import { ImageForm } from "@/src/ImageForm";
import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState();
  const [settings, setSettings] = useState({
    padding: 10,
    radius: 10,
    shadow: 10,
  });
  return (
    <main className="flex items-center justify-center m-auto max-w-4xl gap-8 h-full">
      <ImageForm
        settings={settings}
        setSettings={setSettings}
        setImage={setImage}
        image={image}
      />
      <ImageCard image={image} settings={settings} />
    </main>
  );
}
