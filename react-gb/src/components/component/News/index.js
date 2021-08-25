import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../../store/News/actions';
import { selectNews, selectNewsError, selectNewsLoading } from '../../../store/News/selector';

export const News = () => {

  const dispatch = useDispatch();
  const loadingPage = useSelector(selectNewsLoading);
  const error = useSelector(selectNewsError);
  const newsItems = useSelector(selectNews);

  const heandelRequestNews = useCallback(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    heandelRequestNews();
  }, []);

  if(loadingPage) {
    return <div className='center'>Идет загрузка</div>
  }

  if(error) {
    return(
      <>
        <div className='center'>Ошибка запроса</div>
        <button onClick={heandelRequestNews}>Попробуй еще раз</button>
      </>
    )
  }

  if(!newsItems.length) {
    return <div className='center'>Новостей нету</div>
  }
  return newsItems.map(item => <div className='center' key={item.id}><article>{item.title} </article></div>);
};