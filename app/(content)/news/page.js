import { DUMMY_NEWS } from "@/components/dummy-news";
import NewsList from "@/components/news-list";
export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList newsList={DUMMY_NEWS} />
    </>
  );
}
