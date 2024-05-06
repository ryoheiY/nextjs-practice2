import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest news</h2>
      <NewsList newsList={latestNews} />
    </>
  );
}
