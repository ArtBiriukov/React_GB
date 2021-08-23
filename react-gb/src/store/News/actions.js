import { REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS } from "./actionsType";

const APU_URL = 'https://api.spaceflightnewsapi.net/v3​/articles';

const getNewsStart = () => ({
  type: REQUEST_START,
});

const getNewsSuccses = (news) => ({
  type: REQUEST_SUCCESS,
  payload: news,
});

const getNewsError = (error) => ({
  type:REQUEST_ERROR,
  payload: error,
});

export const getNews = () => async (dispatch) => {
  dispatch(getNewsStart());

  try {
    const response = await fetch(APU_URL);

    console.log(response);
    if(!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();

    dispatch(getNewsSuccses(result));
  } catch (err) {
    dispatch(getNewsError(err.message));
  }
};