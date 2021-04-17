import React from "react";
import s from "./HomeView.module.css";
const HomeView = () => (
  <div>
    <h1 className={s.centr}>
      It is good to see you again! Make yourself at home.{" "}
      <span role="img" aria-label="Иконка приветствия">
        <img src="" alt="" />
      </span>
    </h1>
  </div>
);

export default HomeView;
