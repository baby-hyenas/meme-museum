import React, {useState} from "react";
import "./style.css";

type ChipProps = {
	className: string
	text: string
}

export const Chip: React.FC<ChipProps> = ({className, text}: ChipProps) => {
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
		<div className={`btn-chip ${property} ${className}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseDown}>
			<div className="text-wrapper">{text}</div>
		</div>
	);
};