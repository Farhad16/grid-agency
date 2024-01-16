import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const CursorView = React.memo(
  ({ cursorPosition, handlePlay, play, step, isHovered }) => {
    if (!isHovered) {
      return null;
    }

    return (
      <div
        style={{
          position: "fixed",
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: "translate(-50%, -50%)",
          cursor: "none",
          color: "white",
          zIndex: 9999,
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
        onClick={handlePlay}
      >
        {step === 1 ? (
          play && (
            <div className="flex flex-row items-center gap-1">
              <span className="text-[28px]">Play</span>
              <PlayArrowIcon sx={{ fontSize: "35px" }} />
            </div>
          )
        ) : play ? (
          <div className="flex flex-row items-center gap-1">
            <span className="text-[28px]">Pause</span>
            <PauseIcon sx={{ fontSize: "35px" }} />
          </div>
        ) : (
          <div className="flex flex-row items-center gap-1">
            <span className="text-[28px]">Play</span>
            <PlayArrowIcon sx={{ fontSize: "35px" }} />
          </div>
        )}
      </div>
    );
  }
);

export default CursorView;
