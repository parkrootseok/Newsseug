import Layout from '../components/common/Layout';
import FirstAppear from '../components/splash/FirstAppear';
import SecondAppear from '../components/splash/SecondAppear';

function Splash() {
  return (
    <Layout backgroundColor="#58D7A2">
      <FirstAppear />
      <SecondAppear delay="1s" />
    </Layout>
  );
}

export default Splash;
