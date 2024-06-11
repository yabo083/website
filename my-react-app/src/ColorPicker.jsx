import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copied: ${text}`); // 可选：提供用户反馈
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-[50px] text-4xl">Color Picker</h1>
      <div
        className="w-[300px] h-[300px] flex justify-center items-center border-2 rounded-lg border-dashed mb-4 transition-all cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => copyToClipboard(color)} // 添加点击事件处理器
      >
        <p className="text-4xl text-center">Select Color: {color}</p>
      </div>
      <label className="font-bold text-2xl mb-3 flex flex-col items-center ">
        Select a Color:
        <input className="w-[75px] h-[50px] p-[5px] rounded-lg border-[3px] border-solid mt-2" type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
};

export default ColorPicker;