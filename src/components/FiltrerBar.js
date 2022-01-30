import React from "react";
import "./FilterBar.scss";
import close from "./Icons/close.png";
import { show } from "./js";
const FilterBar = (props) => {
  const closeHandler = () => {
    show();
  };
  const changeStateHandler = (e) => {
    props.onChangeState(e.target.id);
  };
  const clearHandler = () => {
    props.onClear();
  };
  const filters = props.state.map((ele, index) => (
    <p key={index} id={ele} onClick={changeStateHandler}>
      {ele.toUpperCase()}
    </p>
  ));

  return (
    <div className="filter-bar">
      <div className="close">
        <img src={close} alt="close" onClick={closeHandler} />
      </div>
      <div className="filter-item">{filters}</div>
      <div className="clear">
        <p onClick={clearHandler}>Clear</p>
      </div>
    </div>
  );
};
export default FilterBar;
