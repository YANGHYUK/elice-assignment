import asyncComponent from "@lib/asyncComponent"; // 코드 스플릿팅을 위해 asyncComponent 적용
// 각각의 페이지들은 함수와 변수들을 조정하는 container와 화면을 보여주는 component로 구성되어있다.
//
export const MainPage = asyncComponent(() => import("./MainPage"));
