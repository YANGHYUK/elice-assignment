import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actions } from "@store/modules/base";
import ModalContainer from "./Modal/ModalContainer";

const Base = () => <ModalContainer />;

export default Base;
