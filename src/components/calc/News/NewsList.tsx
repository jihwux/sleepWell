import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface NewsArticle {
  title: string;
  description: string;
  link: string;
  publishedAt: string;
  linkToImage: string;
  src: string;
}

const NewsList = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [start, setStart] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingElementRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const display = 10;

  const fetchNewArticles = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const response = await fetch(`/api/getNews?start=${start}&display=${display}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.items.length === 0) {
        setHasMore(false);
        setError('모든 뉴스를 불러왔습니다.');
        return;
      }

      setArticles((prevArticles) => {
        const uniqueArticles = [...prevArticles, ...data.items].reduce((acc, current) => {
          const x = acc.find((item: any) => item.link === current.link);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, [] as NewsArticle[]);
        return uniqueArticles;
      });

      setTotal(data.total);
      setStart((prevStart) => prevStart + data.items.length);
      setHasMore(start + data.items.length < data.total);
    } catch (e) {
      console.error('Fetching news failed:', e);
      setError('뉴스를 불러오는데 실패했습니다. 나중에 다시 시도해 주세요.');
      setHasMore(false);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [start, display]);

  useEffect(() => {
    fetchNewArticles();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loadingRef.current && hasMore) {
        console.log('Loading more articles...');
        fetchNewArticles();
      }
    }, options);

    if (loadingElementRef.current) {
      observer.observe(loadingElementRef.current);
    }

    return () => {
      if (loadingElementRef.current) {
        observer.unobserve(loadingElementRef.current);
      }
    };
  }, [fetchNewArticles, hasMore]);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = 'images/—Pngtree—breaking news banner lower_5550356.png';
  };

  return (
    <div>
      <NewsItemWrap>
        {articles.map((article, index) => (
          <NewsItemBlock key={index}>
            <div className="thumbnail">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img src={article.src} alt="" onError={handleImageError} />
              </a>
            </div>
            <div className="contents">
              <h2>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p>{article.description}</p>
            </div>
          </NewsItemBlock>
        ))}
      </NewsItemWrap>
      <LoadingElement ref={loadingElementRef}>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoadingElement>
    </div>
  );
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  padding: 20px;
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #888;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <SpinnerIcon icon={faSpinner} spin />
    <div>뉴스를 불러오는 중입니다...</div>
  </SpinnerContainer>
);

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
  color: inherit;
  margin-bottom: 10px;
`;

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;

  &:last-child {
    border-bottom: none;
  }

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    flex: 1;
    h2 {
      margin: 0;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      a {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      white-space: normal;
    }
  }
`;

const NewsItemWrap = styled.div`
  margin-top: 2rem;
`;

const LoadingElement = styled.div`
  min-height: 100px;
`;

export default NewsList;
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// interface NewsItem {
//   title: string;
//   originallink: string;
//   link: string;
//   description: string;
//   pubDate: string;
//   src: string;
// }

// interface NewsResponse {
//   items: NewsItem[];
//   start: number;
//   display: number;
//   total: number;
// }

// const NewsList = () => {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [start, setStart] = useState(1);

//   const display = 10;

//   const fetchNews = async () => {
//     if (loading) return;

//     setLoading(true);
//     try {
//       const response = await fetch(`/api/getNews?start=${start}&display=${display}`);
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data: NewsResponse = await response.json();

//       setNews((prevNews) => [...prevNews, ...data.items]);
//       setStart((prevStart) => prevStart + data.items.length);

//       console.log('API Response:', data);
//     } catch (error) {
//       console.error('Fetching news failed:', error);
//       setError('Failed to fetch news. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const loadMore = () => {
//     fetchNews();
//   };

//   return (
//     <div>
//       <h2>News List (Loaded: {news.length})</h2>
//       {news.map((item, index) => (
//         <NewsItem key={index}>
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//           <img src={item.src} alt="" />
//         </NewsItem>
//       ))}
//       {loading && <div>Loading...</div>}
//       {!loading && <LoadMoreButton onClick={loadMore}>Load More (Next Start: {start})</LoadMoreButton>}
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//     </div>
//   );
// };

// const NewsItem = styled.div`
//   margin-bottom: 20px;
// `;

// const LoadMoreButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   margin-top: 10px;
// `;

// export default NewsList;
