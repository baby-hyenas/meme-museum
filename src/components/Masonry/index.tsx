import React, { useState, useEffect } from "react";
import { MasonryItem } from "./MasonryItem";
import { Masonry } from "@mui/lab";
import { ItemProps } from "@/types"
import './style.css'

type MasonryViewProps = {
  items: Array<ItemProps>
}

export const MasonryView: React.FC<MasonryViewProps> = ({ items }: MasonryViewProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Masonry className="list-component" columns={isMobile ? 1 : 2} spacing={0}>
      {items.map((item, index) => (
        <MasonryItem
          key={index}
          src={item.src}
          link={item.link}
          title={item.title}
          isHorizontal={item.isHorizontal}
          tag1={item.tag1}
          tag2={item.tag2}
          year={item.year}
        />
      ))}
    </Masonry>
  );
}