import React, { useMemo } from "react";

const CursorDetails = ({ cursorPosition, isHovered }) => {
  const showCursor = useMemo(() => {
    return isHovered;
  }, [isHovered]);

  if (!showCursor) {
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
      }}
    >
      <img src="/assets/case/view.svg" alt="view" className="" />
    </div>
  );
};

export default CursorDetails;
