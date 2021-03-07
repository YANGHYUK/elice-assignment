import React, { useState, useEffect, useContext } from "react";

import "./ListBoxComponent.scss";
import ListComponent from "./List";
import { ListBoxContext } from "@containers/Main/ListBox/ListBoxContainer";


export default function ListBoxComponent() {
  const [scrollCount, setScrollCount] = useState(1);
  // 스크롤 이벤트 핸들러
  const handleScroll = (): void => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      setScrollCount(scrollCount + 1);
    }
  };
  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const { loading, searchValue, courses, course_count } = useContext(
    ListBoxContext
  )

  if (!searchValue) {
    return <div className="noneSign">검색어를 입력해주세요</div>;
  }
  if (loading) {
    return <div className="loading">검색중...</div>;
  }

  return (
    <div className="listBox-style">
      {course_count && courses.length ? (
        courses
          .slice(0, scrollCount * 20)
          .map((ele:any, index:number) => <ListComponent {...ele} key={index} />)
      ) : (
        <div className="noneSign">"검색결과가 없습니다."</div>
      )}
    </div>
  );
}
