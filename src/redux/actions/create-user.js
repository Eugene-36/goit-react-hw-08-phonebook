import { number } from "prop-types";
import { createAction } from "@reduxjs/toolkit";
const createUser = createAction("actions/create_User", (user) => {
  return {
    payload: {
      name: user.name,
      number: user.number,
      id: user.id,
    },
  };
});

export default createUser;
