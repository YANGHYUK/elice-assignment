import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import SearchBarComponent from "@components/Main/SearchBar";
import { actions as searchActions } from "@store/modules/search/searchModule";


export const SearchBarContext = React.createContext({});


export default function SearchBarContainer() {
  
  const dispatch = useDispatch();
  const handler = debounce((value: string):void => {
    dispatch(
      searchActions.onSearch({
        method: "get",
        api: "courseLists",
        params: {
          filter_title: value,
          offset: 0,
          count: 20,
        },
        loadingBar: true,
        value,
      })
    );
  }, 300);
  const onReset = (value: string):void => {
    dispatch(searchActions.onReset({}));
  };

  const onEnter = (e: ChangeEvent<HTMLInputElement>):void => {
    // let key = e.key;
    let value = e.target.value;
    if (value.length) {
      dispatch(
        searchActions.onSearch({
          method: "get",
          api: "courseLists",
          params: {
            filter_title: value,
            offset: 0,
            count: 20,
          },
          loadingBar: true,
          value,
        })
      );
    }
  };

  return (
    <SearchBarContext.Provider value={{ onEnter, handler, onReset }}>
      <SearchBarComponent />
    </SearchBarContext.Provider>
  );
}
