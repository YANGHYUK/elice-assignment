import React, { useState, useCallback, useContext ,ChangeEvent} from "react";
import "./SearchBarComponent.scss";
import searchIcon from "@styles/images/search/search.png";
import closeIcon from "@styles/images/search/close.png";
import { SearchBarContext } from "@containers/Main/SearchBar/SearchBarContainer";
export default function SearchBarComponent() {
  const { onEnter, handler, onReset } = useContext(SearchBarContext);
  const [value, setValue] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const onDelete = (): void => {
    setValue("");
    onReset();
  };
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
      handler(e.target.value);
    },
    [value]
  );

  return (
    <div className="searchBar-style">
      <span className={`searchBar-style__inputBox ${focus && "active"}`}>
        <img className="searchIcon" src={searchIcon} alt="searchIcon" />
        <input
          placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
          onChange={onChange}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onKeyPress={onEnter}
        />
        {value && (
          <img
            className="deleteIcon"
            src={closeIcon}
            alt="deleteIcon"
            onClick={onDelete}
          />
        )}
      </span>
    </div>
  );
}
