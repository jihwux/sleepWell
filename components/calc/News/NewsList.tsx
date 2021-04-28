import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import NewsItem from './NewsItem';

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2f0afaba1dab40bdaec56e27691e9a6a'
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <NewsItem article={sampleArticle} />
    </div>
  );
};

export default NewsList;
