import React from "react";
import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    windows
  } = useWindowStore();

  const isMaximized = windows?.[target]?.isMaximized;

  return (
    <div
      id="window-controls"
      className={`
        flex gap-2 items-center
        transition-all duration-200
        ${isMaximized ? "rounded-none border-0" : "rounded-full border-transparent"}
      `}
    >
      {/* Close */}
      <div className="close" onClick={() => closeWindow(target)}>
        <svg viewBox="0 0 16 16">
          <path
            d="M4 4 L12 12 M12 4 L4 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Minimize */}
      <div className="minimize" onClick={() => minimizeWindow(target)}>
        <svg viewBox="0 0 16 16">
          <rect x="4" y="7" width="8" height="2" rx="1" fill="black" />
        </svg>
      </div>

      {/* Maximize */}
      <div className="maximize" onClick={() => maximizeWindow(target)}>
        <svg viewBox="0 0 16 16">
          <rect
            x="4.5"
            y="4.5"
            width="7"
            height="7"
            rx="1"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default WindowControls;
