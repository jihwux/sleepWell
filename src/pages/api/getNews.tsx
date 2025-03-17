import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { JSDOM } from 'jsdom';

const CLIENT_ID = 'KT_v632yImE6CokNjCBc';
const CLIENT_SECRET = 'p1dMGxfCv1';

const cleanText = (text: string): string => {
  return text
    .replace(/<\/?b>/g, '')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"');
};

const fetchNewsData = async (query: string, start: number, display: number): Promise<any> => {
  const url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(
    query,
  )}&start=${start}&display=${display}&sort=sim`;

  console.log(`Fetching news from URL: ${url}`);

  const response = await axios.get(url, {
    headers: {
      'X-Naver-Client-Id': CLIENT_ID,
      'X-Naver-Client-Secret': CLIENT_SECRET,
    },
  });

  return response.data;
};

const extractImageSrc = async (url: string): Promise<string> => {
  try {
    const { data } = await axios.get(url);
    const dom = new JSDOM(data);
    const imgElement = dom.window.document.querySelector('img:nth-of-type(1)') as HTMLImageElement;
    return imgElement ? imgElement.src : '';
  } catch (error) {
    console.error(`Failed to extract image from ${url}:`, error);
    return '';
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const start = parseInt(req.query.start as string) || 1;
  const display = parseInt(req.query.display as string) || 10;
  const query = '불면증 OR 수면의 질 OR 수면 개선';

  try {
    const data = await fetchNewsData(query, start, display);

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error('Unexpected API response format');
    }

    const items = await Promise.all(
      data.items.map(async (item: any) => {
        const src = await extractImageSrc(item.link);
        return {
          title: cleanText(item.title),
          originallink: item.originallink,
          link: item.link,
          description: cleanText(item.description),
          pubDate: item.pubDate,
          src,
        };
      }),
    );

    console.log(`Fetched and processed ${items.length} items, start: ${start}, display: ${display}`);

    res.status(200).json({
      items,
      start: data.start,
      display: data.display,
      total: data.total,
    });
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: 'An internal server error occurred', details: (error as Error).message });
  }
}
