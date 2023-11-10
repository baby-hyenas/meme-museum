import React, {useState} from "react";
import "./style.css";

type ToggleChipProps = {
  text: string,
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleChip: React.FC<ToggleChipProps> = ({ text, setToggle }: ToggleChipProps) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const toggle = () => {
    if(setToggle)
      setToggle(!isOn);
      
    setIsOn(!isOn);
  };

  return (
    <div className={`chip-toggle ${isOn ? "chip-toggle-on" : "chip-toggle-off"}`} onClick={toggle}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};