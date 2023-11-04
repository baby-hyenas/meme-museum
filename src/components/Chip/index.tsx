import React, {useState} from "react";
import "./style.css";

type ChipProps = {
	text: string
}

export const Chip: React.FC<ChipProps> = ({text}: ChipProps) => {
	const [selected, setSelected] = useState<boolean>(false);
	const [property, setProperty] = useState<"chip-default" | "chip-pressed" | "chip-hover">("chip-default");

  const handleMouseOver = () => {
    setProperty(selected ? "chip-pressed" :"chip-hover");
  };

  const handleMouseOut = () => {
    setProperty(selected ? "chip-pressed" : "chip-default");
  };

	const handleMouseDown = () => {
    setSelected(!selected);
  };

	return (
		<div className={`btn-chip ${property}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseDown}>
			<div className="text-wrapper">{text}</div>
		</div>
	);
};