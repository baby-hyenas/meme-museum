import { Chip } from '@/components'
import './style.css'

type MasonryItemProps = {
  src?: string,
  link?: string,
  title: string,
  isHorizontal: number,
  tag?: string,
  year?: number
}

// 아이템 컴포넌트
export const MasonryItem = ({ src, title, link, isHorizontal }: MasonryItemProps): JSX.Element => {
  const itemType = isHorizontal ? 'hori' : 'vert';
  return (
    <div className={`list-item ${itemType}`}>
      <img className="list-item-image" src={src ??= (isHorizontal ? "/assets/default-image-h.svg" : "/assets/default-image-v.svg")} alt={title} />
      <div className="list-item-content">
        <div className="list-item-title">
          {title}
        </div>
        <div className="list-item-link">
          {link}
        </div>
        <div className="list-item-chip-section">
          <Chip text='#무한도전' theme='gray' />
          <Chip text='#예능' theme='gray' />
        </div>
      </div>
    </div>
  );
}