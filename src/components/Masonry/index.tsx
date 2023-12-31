import React, { useState, useEffect, useRef } from "react";
import { MasonryItem } from "./MasonryItem";
import { Masonry } from "@mui/lab";
import { ItemProps } from "@/types"
import './style.css'

type MasonryViewProps = {
  items: Array<ItemProps>
}

export const MasonryView: React.FC<MasonryViewProps> = ({ items }: MasonryViewProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<ItemProps[]>([]);
  const pageRef = useRef(0);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    if (items.length > 0) initData(items);
  }, [items])

  const initData = (renderItem: ItemProps[]) => {
    if (renderItem.length > 0) {
      const initCount = Math.min(5, renderItem.length);
      pageRef.current = initCount;
      setData(renderItem.slice(0, initCount));
    } else {
      pageRef.current = 0;
      setData([]);
    }
  };

  const fetchData = (renderItem: ItemProps[]) => {
    if (renderItem.length > 0) {
      if (pageRef.current == renderItem.length)
        return;
      const fetchIndex = Math.min(pageRef.current + 5, renderItem.length);
      const addItems = renderItem.slice(pageRef.current, fetchIndex)
      pageRef.current = fetchIndex;
      setData(prevData => [...prevData, ...addItems]);
    } else {
      pageRef.current = 0;
      setData([]);
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
      fetchData(items);
    }
  };


  return (
    <Masonry className="list-component" columns={isMobile ? 1 : 2} spacing={0}>
      {data.map((item, index) => (
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