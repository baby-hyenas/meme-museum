import React from "react";
import "./style.css";

type ChipProps = {
  text: string
}

export const Chip: React.FC<ChipProps> = ({ text }: ChipProps) => {
  return (
    <div className="btn-chip">
      <div className="text-wrapper">{text}</div>
    </div>
  );
};