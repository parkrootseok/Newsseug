import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Scrap from "./pages/Scrap";
import AllScraps from "./pages/AllScraps";
import MyPage from "./pages/MyPage";
import AllSubscribes from "./pages/AllSubscribes";
import Subscribes from "./pages/Subscribes";
import AllArticles from "./pages/AllArticles";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Press from "./pages/Press";
import Article from "./pages/Article";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles/all" element={<AllArticles />} />
        <Route path="/subscribes" element={<Subscribes />} />
        <Route path="/subscribes/all" element={<AllSubscribes />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/scraps" element={<AllScraps />} />
        <Route path="/mypage/scraps/:scrapId" element={<Scrap />} />
        <Route path="/search" element={<Search />} />
        <Route path="/press/:pressId" element={<Press />} />
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
