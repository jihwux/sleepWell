import React, { useState, useEffect, Suspense } from 'react';
import { throttle } from 'lodash';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import NewsItem from './NewsItem';

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
  const [showLoading, setShowLoading] = useState(false); // 추가: 맨 아래에서 로딩을 표시하기 위한 상태
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchNewArticles = async (page = 1) => {
    setShowLoading(true); // 로딩 상태를 시작으로 변경

    setLoading(true);

    try {
      const response = await fetch(`/api/news?page=${page}`);
      const data = await response.json();

      // 중복 기사 제거를 위해 Set 객체를 사용합니다.
      const uniqueData = Array.from(new Set([...articles, ...data].map((article) => article.link))).map((link) => {
        return [...articles, ...data].find((article) => article.link === link);
      });

      setArticles(uniqueData);
      setPage((prevPage) => prevPage + 1);
    } catch (e) {
      console.log(e);
      setError('An error occurred');
    } finally {
      setLoading(false);
      setShowLoading(false); // 로딩 상태를 완료로 변경
    }
  };

  useEffect(() => {
    fetchNewArticles();
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - scrollTop - clientHeight <= 1) {
      throttledFetchMoreData(page);
    }
  };

  const throttledFetchMoreData = throttle(fetchNewArticles, 500);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // 수정: 'scroll' 이벤트 리스너에 handleScroll 함수 사용
    return () => {
      window.removeEventListener('scroll', handleScroll); // 수정: 'scroll' 이벤트 리스너에서 handleScroll 함수 제거
    };
  }, [articles]); // 수정: handleScroll 함수 변경 시 재등록

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NewsItem articles={articles} />
      {loading && (
        <SpinnerContainer>
          <SpinnerIcon icon={faSpinner} spin />
          <div>{articles.length > 0 ? '마지막 뉴스를 불러오고 있습니다...' : '뉴스를 불러오는 중 입니다...'}</div>
        </SpinnerContainer>
      )}
    </div>
  );
};

export default NewsList;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  color: #ff69b4;
`;

const SpinnerIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: inherit; //상속
  margin-bottom: 10px;
`;
