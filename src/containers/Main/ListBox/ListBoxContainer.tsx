import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBoxComponent from "@components/Main/ListBox";
// import { actions as searchActions } from "@store/modules/search/searchModule";
import { INITIAL_STATE  } from "@store/modules/search/searchModule";
import { STORE_STATE  } from "@store/modules/search/searchModule";


export const ListBoxContext = React.createContext<STORE_STATE>({...INITIAL_STATE});
const ListBoxContainer = () => {
  const { loading, searchValue, courses, course_count } = useSelector(
    (state: any) => ({
      loading: state.search.loading,
      searchValue: state.search.searchValue,
      courses: state.search.courses,
      course_count: state.search.course_count,
    })
  );
  return (
    <ListBoxContext.Provider
      value={{ loading, searchValue, courses, course_count }}
    >
      <ListBoxComponent />
    </ListBoxContext.Provider>
  );
};

export default ListBoxContainer;
