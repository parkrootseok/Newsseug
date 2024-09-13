import MainLayout from '../components/common/MainLayout';
import Section from 'components/home/Section';
import Login from './Login';
import Splash from './Splash';
import UserInput from './UserInput';
import AllArticles from './AllArticles';
function Home() {
  return (
    // <MainLayout>
    //   {DummyData.map((data, index) => (
    //     <Section
    //       key={index}
    //       subTitle={data.subTitle}
    //       ArticleList={data.ArticleList}
    //     />
    //   ))}
    // </MainLayout>
    // <Splash />
    // <UserInput />
    // <Login />
    <AllArticles />
  );
}

export default Home;

const DummyData = [
  {
    subTitle: '오늘의 뉴스',
    ArticleList: [
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
    ],
  },
  {
    subTitle: '전체 기사',
    ArticleList: [
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
    ],
  },
  {
    subTitle: '20대 관심 기사',
    ArticleList: [
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
      {
        imgUrl: '/public/ArimaKana.png',
        title: '숏폼 제목',
        viewCount: 41000,
        pressName: '언론사 이름',
      },
    ],
  },
];
