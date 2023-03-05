import useSWR from 'swr';
import type { Article } from '../openapi/models';
import { client } from './client';

// 1回に取得する記事の数
const articlesPerPage = 20;

type ArticlesState = {
    articles: Article[];
    error?: Error;
    currentIndex?: string;
};

const articlesState: ArticlesState = {
    articles: [],
};

export const useListArticles = (currentIndex : string) => {
    const key = `/api/v1/articles`;

    const fetcher = async () => client.v1ListArticles({
        maxPageSize: articlesPerPage,
        pageToken: currentIndex,
    });
    const { data } = useSWR([key, currentIndex], fetcher);

    const fetchedArticles = data?.articles ?? [];
    const existIds = new Set(articlesState.articles.map((d) => d.id));
    const additionalArticles = fetchedArticles.filter((d) => !existIds.has(d.id));
    articlesState.articles.push(...additionalArticles);

    // NextPageTokenが空の場合、もうこれ以上データがないのでcurrentIndexを更新しない
    if (!(data?.nextPageToken === '')) {
        articlesState.currentIndex = data?.nextPageToken;
    }

    return articlesState;
};
