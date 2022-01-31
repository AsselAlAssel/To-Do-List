import React from "react";
import "./FilterShow.scss"

const FilterShow = (props) => {
  //   const Options = props.stateList.map((ele) =><options value={ele}>{ele}</options>);
  const changeHandler = (e) => {
    props.onChangeState(e.target.value);
  };
  const optionsSelect = props.stateList.map((ele ,index) => <option value={ele} key={index}>{ele.toUpperCase()}</option>);
  return (
    <div className="filter-show">
       <div className="select-state">
        <select onChange={changeHandler}>
          {optionsSelect}
        </select>
      </div>
      <div className="state-show">
        <h2>{props.state.toUpperCase()}</h2>
      </div>
     
    </div>
  );
};
export default FilterShow;
