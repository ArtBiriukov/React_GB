import { EXAMPLE_ACTION, PROFILE_DROP_NAME, PROFILE_SET_NAME, PROFILE_TOGGLE_SHOW } from "./actionTypes";


const initialState = {
  showName: false,
  name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case EXAMPLE_ACTION:
      return {
        ...state,
        showName: !state.showName
      }

    case PROFILE_TOGGLE_SHOW: {
        return {
          ...state,
          show: !state.show,
        };
      }
      
    case PROFILE_DROP_NAME: {
        return {
          ...state,
          name: '',
        };
      }
      
    case PROFILE_SET_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }

    default:
      return state
  }
};

