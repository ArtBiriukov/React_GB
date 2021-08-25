import { REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS } from "./actionsType";

export const REQUEST_STATUS = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

const initialState = {
  DataTransferItem: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
};

export const newsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_START: {
      return {
        ...state,
        request: {
          ...state.request,
          error:null,
          status: REQUEST_STATUS.LOADING
        },
      };
    }

    case REQUEST_SUCCESS: {
      return {
        ...state,
        data: payload,
        request: {
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    }

    case REQUEST_ERROR: {
      return {
        ...state, 
        request: {
          status: REQUEST_STATUS.ERROR,
          error: payload,
        },
      };
    }

    default:
      return state;
  }
};