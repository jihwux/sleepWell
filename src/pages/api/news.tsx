import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const page = parseInt(req.query.page as string) || 1; // 페이지 query로부터 가져오기
  const displayCount = 4;

  const client_id = 'DEEVJGU0hVQnOySMiJN7';
  const client_secret = 'SMlXxOWhtD';
  const query = '불면증';

  const startPage = (page - 1) * displayCount + 1; // 시작 페이지 계산

  try {
    const items = [];
    const response = await fetch(
      `${API_ENDPOINT}/v1/search/news.json?query=${query}&start=${startPage}&display=${displayCount}
      &sort=sim`,
      {
        headers: {
          'X-Naver-Client-Id': client_id,
          'X-Naver-Client-Secret': client_secret,
          'Access-Control-Allow-Origin': '*', // 모든 출처 허용
        },
      },
    );
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].link.includes('naver')) {
        const imgResponse = await axios.get(data.items[i].link);

        const imgText = imgResponse.data;
        const dom = new JSDOM(imgText);

        const imgElement = dom.window.document.querySelector('img:nth-of-type(1)') as HTMLImageElement;

        const src = imgElement ? imgElement.src : '';
        const cleanedDescription = data.items[i].description
          .replace(/<b>/g, '')
          .replace(/<\/b>/g, '')
          .replace(/&apos;/g, "'")
          .replace(/&quot;/g, '');
        const cleanedTitle = data.items[i].title
          .replace(/<b>/g, '')
          .replace(/<\/b>/g, '')
          .replace(/&apos;/g, "'")
          .replace(/&quot;/g, '');

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
    // console.log(items);
    res.status(200).json(items);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'An error occurred' });
  }
}
