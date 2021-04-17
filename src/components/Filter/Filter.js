import React, { Component } from "react";

import { changeFilter } from "../../redux/actions/index";
import { connect } from "react-redux";
import getFilterSelctors from "../../redux/actions/contacts-selectors";
import s from "./Filter.module.css";
const Filter = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <label className={s.position}>
        Find contacts by name
        <input
          type="text"
          className="TodoFilter__input"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: getFilterSelctors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
