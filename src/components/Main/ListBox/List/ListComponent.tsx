import React from "react";
import "./ListComponent.scss";

import { useDispatch } from "react-redux";
import { actions as baseAction } from "@store/modules/base";

interface Props {
  title: string;
  logo_file_url:string;
  content: string;
  short_description:string;
}
export default function ListComponent({
  title,
  logo_file_url,
  short_description,
}:Props) {
  const dispatch = useDispatch();
  const showModal = (message:{ message :string}): void => {
    dispatch(baseAction.showModal({ modalType: "modal", message }));
  };
  return (
    <div
      className="list-style"
      onClick={() =>
        showModal({ message: short_description || "세부내용 없음" })
      }
    >
      <span className="list-style__header">
        {title && <label>{title}</label>}
        {logo_file_url && <img src={logo_file_url} alt="logo" />}
      </span>
      {short_description && (
        <span className="list-style__body">{short_description}</span>
      )}
    </div>
  );
}
