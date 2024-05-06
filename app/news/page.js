import { DUMMY_NEWS } from "@/app/components/dummy-news";
import Image from "next/image";
import Link from "next/link";
import NewsList from "../components/news-list";
export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList newsList={DUMMY_NEWS} />
    </>
  );
}
