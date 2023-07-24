import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import NewsItem from './NewsItem';

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const SpinnerIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #333;
`;

interface NewsArticle {
  title: string;
  description: string;
  link: string;
  publishedAt: string;
  linkToImage: any;
  src: string;
}

const NewsList = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`/api/news?page=${page + 1}`);
      const data = await response.json();
      if (data.length === 0) {
        setLoading(false);
        return;
      }
      setArticles((prevArticles) => [...prevArticles, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (e) {
      console.log(e);
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreData(); // 초기에 데이터를 불러옵니다.
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight) {
      // 스크롤이 리스트의 끝에 도달하면 새로운 데이터를 불러옵니다.
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [articles]);

  if (loading && articles.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NewsItem articles={articles} />
    </div>
  );
};

export default NewsList;
