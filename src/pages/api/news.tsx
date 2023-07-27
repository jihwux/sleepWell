import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const previousArticles = new Set();
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

  const client_id = 'DEEVJGU0hVQnOySMiJN7';
  const client_secret = 'SMlXxOWhtD';
  const query = '불면증';

  const page = parseInt(req.query.page as string) || 1;
  const display = 10; // 한 페이지당 보여줄 데이터 개수

  try {
    const items = [];
    const response = await fetch(
      `${API_ENDPOINT}/v1/search/news.json?query=${query}&display=${display}&start=${
        (page - 1) * display + 1
      }&sort=sim`,
      {
        headers: {
          'X-Naver-Client-Id': client_id,
          'X-Naver-Client-Secret': client_secret,
          'Access-Control-Allow-Origin': '*', // 모든 출처 허용
        },
      },
    );
    console.log(page, display);
    const data = await response.json();

    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].link.includes('naver')) {
        const imgResponse = await axios.get(data.items[i].link);
        const articleId = data.items[i].link; // 기사의 고유 식별자 (예: id 또는 link를 고유한 키로 사용)
        if (!previousArticles.has(articleId)) {
          // 이미 전송한 기사가 아니라면
          previousArticles.add(articleId); // 이 기사를 Set에 추가하여 중복을 걸러냄
          const imgText = imgResponse.data;

          const dom = new JSDOM(imgText);

          const imgElement = dom.window.document.querySelector('img:nth-of-type(1)') as HTMLImageElement;

          const src = imgElement ? imgElement.src : '';
          const cleanedDescription = data.items[i].description
            .replace(/<b>/g, '')
            .replace(/<\/b>/g, '')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, ''); // &quot; 제거

          const cleanedTitle = data.items[i].title
            .replace(/<b>/g, '')
            .replace(/<\/b>/g, '')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, ''); // &quot; 제거

          items.push({
            title: cleanedTitle,
            originallink: data.items[i].originallink,
            link: data.items[i].link,
            description: cleanedDescription,
            pubDate: data.items[i].pubDate,
            src,
          });
        }
      }
    }

    console.log(items);
    res.status(200).json(items);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'An error occurred' });
  }
}
