import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const CursorView = ({ cursorPosition, handlePlay, play, step }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: cursorPosition.y,
        left: cursorPosition.x,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        color: "white",
        fontSize: "24px",
      }}
      onClick={handlePlay}
    >
      {step === 2 ? (
        play && (
          <div className="flex flex-row items-center gap-2">
            <span>Play</span> <PlayArrowIcon />
          </div>
        )
      ) : play ? (
        <div className="flex flex-row items-center gap-2">
          <span>Pause</span> <PauseIcon />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-2">
          <span>Play</span> <PlayArrowIcon />
        </div>
      )}
    </div>
  );
};

export default CursorView;
