import React from "react";
import "./style.css";

type ChipProps = {
	text: string,
  onClicked?: () => void
}

export const Chip: React.FC<ChipProps> = ({text, onClicked}: ChipProps) => {
	return (
		<div className="chip-button" onClick={onClicked}>
			<div className="text-wrapper">{text}</div>
		</div>
	);
};