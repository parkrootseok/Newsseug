import Layout from 'components/common/Layout';
import FirstAppear from 'components/splash/FirstAppear';
import SecondAppear from 'components/splash/SecondAppear';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

/**
 * IMP : Splash Page
 * TODO : Splash Page가 가장 먼저 나오도록 하고, 그 뒤에 Main Page로 이동하도록 구현
 * @returns
 */
function Splash() {
  const navigate = useNavigate();
  const handleAnimationEnd = () => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <Layout backgroundColor="#58D7A2">
      <Helmet>
        <meta name="theme-color" content="#58D7A2" />
      </Helmet>
      <FirstAppear />
      <SecondAppear delay="1s" onAnimationEnd={handleAnimationEnd} />
    </Layout>
  );
}

export default Splash;
