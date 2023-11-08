import { MasonryItem } from "./MasonryItem";
import { Masonry } from "@mui/lab";
import './style.css'

type ItemProp = {
  src?: string,
  link?: string,
  title: string,
  isHorizontal: boolean
}

type MasonryViewProps = {
  items: Array<ItemProp>
}

export const MasonryView: React.FC<MasonryViewProps> = ({ items }: MasonryViewProps) => {
  return (
    <Masonry className="list-component" columns={2} spacing={0}>
      {items.map((item, index) => (
        <MasonryItem
          key={index}
          src={item.src}
          link={item.link}
          title={item.title}
          isHorizontal={item.isHorizontal}
        />
      ))}
    </Masonry>
  );
}