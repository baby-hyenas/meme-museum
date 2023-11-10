import React from 'react'
import { Chip } from '@/components'
import { addHash } from '@/utils';
import { ItemProps } from '@/types';
import './style.css'


// 아이템 컴포넌트
export const MasonryItem: React.FC<ItemProps> = ({isHorizontal, link, title, tag1, tag2, src}: ItemProps) => {
  const itemType = isHorizontal ? 'hori' : 'vert';
  return (
    <div className={`list-item ${itemType}`}>
      <a href={link} target="_blank">
        <img className="list-item-image" src={src ??= (isHorizontal ? "/assets/default-image-h.svg" : "/assets/default-image-v.svg")} alt={title} />
      </a>
      <div className="list-item-content">
        <div className="list-item-title">
          {title}
        </div>
        <div className="list-item-link">
          {link}
        </div>
        <div className="list-item-chip-section">
          {tag1 && <Chip text={addHash(tag1)} theme='gray' />}
          {tag2 && <Chip text={addHash(tag2)} theme='gray' />}
        </div>
      </div>
    </div>
  );
}