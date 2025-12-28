import React from "react";
import useWindowStore from "#store/window";

const WindowClose = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div
      id="window-close"
      className="flex items-center"
    >
      <div
        onClick={() => closeWindow(target)}
        className="
          w-3 h-3 rounded-full bg-red-500
          hover:bg-red-400
          transition cursor-pointer
          flex items-center justify-center
        "
      >
        <svg
          viewBox="0 0 16 16"
          className="w-2.5 h-2.5 opacity-0 hover:opacity-100 transition"
        >
          <path
            d="M4 4 L12 12 M12 4 L4 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default WindowClose;
