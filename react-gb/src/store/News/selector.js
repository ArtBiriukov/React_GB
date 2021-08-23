import { REQUEST_STATUS } from "./reducer";

export const selectNews = (state) => state.news.date;
export const selectNewsLoading = (state) => state.news.request.status === REQUEST_STATUS.LOADING;
export const selectNewsError = (state) => state.news.request.selectNewsError;