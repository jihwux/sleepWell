import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

// 건강 뉴스 받기 , 이후 상단 본인 건강 글 상단 독점.

const NewsList = () => {};

const SleepInfo = () => {
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
      <Button onClick={onClick}> hi </Button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default SleepInfo;
// 2f0afaba1dab40bdaec56e27691e9a6a
