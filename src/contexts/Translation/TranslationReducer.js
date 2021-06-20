import { GET_LANGUAGE, SET_LANGUAGE, DEFAULT_LANGUAGE } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };

    default:
      return state;
  }
};
