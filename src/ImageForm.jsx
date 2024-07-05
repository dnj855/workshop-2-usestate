"use client";

import { useState } from "react";
import { InputRange } from "./InputRange";

export const ImageForm = ({ settings, setSettings, setImage }) => {
  const setSetting = (key, setting) => {
    const newSettings = { ...settings, [key]: setting };
    setSettings(newSettings);
  };
  return (
    <div className="card bg-base-100 min-w-96 w-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">Settings</h2>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              className="file-input file-input-bordered file-input-primary w-full file-input-sm"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file && file.type.startsWith("image/")) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const img = new Image();
                    img.onload = () => {
                      setImage({
                        src: reader.result,
                        width: img.width,
                        height: img.height,
                        name: file.name,
                      });
                    };
                    img.src = reader.result;
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <InputRange
            settings={settings}
            setSetting={setSetting}
            settingType="padding"
          />
          <InputRange
            settings={settings}
            setSetting={setSetting}
            settingType="radius"
          />
          <InputRange
            settings={settings}
            setSetting={setSetting}
            settingType="shadow"
          />
        </form>
      </div>
    </div>
  );
};
