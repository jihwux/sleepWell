import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { NextApiResponse, NextApiRequest } from 'next';
// import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async
    const fetchData = async () => {
      const client_id = 'DEEVJGU0hVQnOySMiJN7';
      const client_secret = 'SMlXxOWhtD';
      // setLoading(true);
      try {
        // const response = await axios.get(
        //   'https://newsapi.org/v2/everything?q=불면증&apiKey=2f0afaba1dab40bdaec56e27691e9a6a'
        // );
        const response = await axios.get(
          'https://openapi.naver.com/v1/search/news.json',
          {
            params: {
              query: '코로나',
              display: 20,
            },
            headers: {
              'X-Naver-Client-Id': client_id,
              'X-Naver-Client-Secret': client_secret,
              // 'Access-Control-Allow-Origin': '*',
            },
          }
        );
        // setArticles(response.data.articles);
        // console.log(articles);
        // console.log(response);
        // console.log('sdf');
      } catch (e) {
        console.log(e);
      }
      // setLoading(false);
      const tests = response.data;
      console.log(tests);
      return {
        props: { tests },
      };
    };
    fetchData();
  }, []);

  // if (loading) {
  //   return <div>대기중</div>;
  // }

  // if (!articles) {
  //   return null;
  // }

  return (
    <div>
      {/* {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))} */}
      sdfsdfsdf
    </div>
  );
};

export default NewsList;
