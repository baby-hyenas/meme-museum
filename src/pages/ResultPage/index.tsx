import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar, MasonryView, Chip } from "@/components";
import "./style.css";

type ItemProp = {
  src?: string,
  link?: string,
  title: string,
  isHorizontal: boolean
}

export const ResultPage = (): JSX.Element => {

  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const navigateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/result?name=${searchKeyword}`)
  }
  const dummyItems: ItemProp[] = [
    { title: '이제는 더 이상 물러날 곳이 없다', src: 'https://img.youtube.com/vi/h7WaI841Vlc/mqdefault.jpg', link: 'https://www.youtube.com/watch?v=h7WaI841Vlc', isHorizontal: true },
    { title: '노홍철 - 자아도취 스킨 바르기',  src: 'https://img.youtube.com/vi/uA719igePao/oar2.jpg', link: 'https://www.youtube.com/shorts/uA719igePao', isHorizontal: false },
    { title: '아이템2', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템3', link: 'https://www.youtube.com/watch', isHorizontal: true },
    { title: '아이템4', link: 'https://www.youtube.com/watch', isHorizontal: true },
    { title: '아이템5', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템6', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템7', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템8', link: 'https://www.youtube.com/watch', isHorizontal: true },
    { title: '아이템9', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템10', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템11', link: 'https://www.youtube.com/watch', isHorizontal: false },
    { title: '아이템12', link: 'https://www.youtube.com/watch', isHorizontal: true },
  ];

  return (
    <div className="resultpage">
      <div className="search-section">
        <SearchBar onSubmit={navigateResult} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} placeholder="검색어를 입력해주세요." />
        <div className="chip-section">
          <Chip text="~2010" />
          <Chip text="2011~2020" />
          <Chip text="2020~" />
        </div>
      </div>
      <div className="result-section">
        <MasonryView items={dummyItems} />
      </div>
    </div >
  );
};
