import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilterdNewsPage({params}){
    const newsYear = params.year;
    const newsList = getNewsForYear(newsYear);
    return <NewsList newsList={newsList} />
}