import React from 'react';
import styled from 'styled-components';

// interface
interface NewsArticle {
  title: string;
  description: string;
  link: string;
  publishedAt: string;
  linkToImage: any;
  src: string;
}
const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.onerror = null; //
  event.currentTarget.src = 'images/—Pngtree—breaking news banner lower_5550356.png';
};

const NewsItem: React.FC<{ articles: NewsArticle[] }> = ({ articles }) => {
  return (
    <NewsItemWrap>
      {articles.map((article, index) => (
        <NewsItemBlock key={index}>
          <div className="thumbnail">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <img src={article.src} alt="" onError={(event) => handleImageError(event)} />
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
  );
};

export default NewsItem;

const NewsItemBlock = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const NewsItemWrap = styled.div`
  .item {
    display: flex;
  }

  overflow: hidden;

  .thumbnail {
    margin-right: 1rem;
    padding: 1rem 0;
    img {
      display: block;
      width: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      padding: 1rem 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;
