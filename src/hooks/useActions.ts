import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as userActions from "../store/users/user.actions"
const rootActions = {
  ...userActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
