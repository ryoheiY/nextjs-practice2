"use client"

import { DUMMY_NEWS } from "@/components/dummy-news";
import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";
export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews(){
      const res = await fetch("http://localhost:8080/news");
      if(!res.ok){
        setError("Failed to fetch news.");
        setIsLoading(false);
      }
      const resData = await res.json();
      setIsLoading(false);
      setNews(resData);

    }
    fetchNews();
    
  }, []);

  if(isLoading){
    return <p>Loading</p>
  }
  if(error){
    return <p>{error}</p>
  }
  let newsContent;
  if(news){
    newsContent =  <NewsList newsList={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
