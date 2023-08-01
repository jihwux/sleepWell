import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';

interface NewsContent {
  link: string;
  description: string;
  title: string;
  originallink: string;
  pubDate: string;
  src?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const page = parseInt(req.query.page as string) || 1;
  const displayCount = 20;

  const client_id = 'DEEVJGU0hVQnOySMiJN7';
  const client_secret = 'SMlXxOWhtD';
  const query = '불면증';

  const startPage = (page - 1) * displayCount + 1;

  try {
    const response = await fetch(
      `${API_ENDPOINT}/v1/search/news.json?query=${query}&start=${startPage}&display=${displayCount}
      &sort=sim`,
      {
        headers: {
          'X-Naver-Client-Id': client_id,
          'X-Naver-Client-Secret': client_secret,
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    const data = await response.json();
    console.log(data);

    const imageRequests = data.items
      .filter((item: NewsContent) => item.link.includes('naver'))
      .map(async (item: NewsContent) => {
        const imgResponse = await axios.get(item.link);

        const imgText = imgResponse.data;
        const dom = new JSDOM(imgText);
        const imgElement = dom.window.document.querySelector('img:nth-of-type(1)') as HTMLImageElement;
        const src = imgElement ? imgElement.src : '';

        const cleanedDescription = item.description
          .replace(/<b>/g, '')
          .replace(/<\/b>/g, '')
          .replace(/&apos;/g, "'")
          .replace(/&quot;/g, '');
        const cleanedTitle = item.title
          .replace(/<b>/g, '')
          .replace(/<\/b>/g, '')
          .replace(/&apos;/g, "'")
          .replace(/&quot;/g, '');

        return {
          title: cleanedTitle,
          originallink: item.originallink,
          link: item.link,
          description: cleanedDescription,
          pubDate: item.pubDate,
          src,
        };
      });

    const items = await Promise.all(imageRequests);
    res.status(200).json(items);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: 'An error occurred' });
  }
}
