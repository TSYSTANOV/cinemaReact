import ContentPage from "../pages/ContentPage/ContentPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import Trends from "../pages/TrendsPage/Trends";

export const routes = [
  { path: "/", element: <Trends /> },
  { path: "top_rated-movie", element: <ContentPage /> },
  { path: "top_rated-tv", element: <ContentPage /> },
  { path: "popular-movie", element: <ContentPage /> },
  { path: "popular-tv", element: <ContentPage /> },
  { path: "search", element: <SearchPage /> },
];
