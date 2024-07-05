"use client";

export const InputRange = ({ settings, setSetting, settingType }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-baseline">
        <label htmlFor={settingType} className="capitalize">
          {settingType}
        </label>
        <span className="text-gray-400 text-sm">{settings[settingType]}</span>
      </div>
      <input
        id={settingType}
        type="range"
        min={0}
        max={99}
        value={settings[settingType]}
        className="range range-primary range-sm"
        onChange={(e) => {
          setSetting(settingType, e.target.value);
        }}
      />
    </div>
  );
};
