import LoginModal from 'components/login/LoginModal';
import { useState, useEffect } from 'react';
import { reissueToken } from 'apis/loginApi';
import { getCookie, getTokenExpiration, setCookie } from 'utils/stateUtils';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('Changed');
    const checkAuthentication = async () => {
      let accessToken = getCookie('AccessToken');
      const refreshToken = getCookie('RefreshToken');
      const providerId = getCookie('ProviderId');
      if (!accessToken && refreshToken) {
        try {
          accessToken = await reissueToken(providerId);
          console.log(accessToken);
          let accessTokenTime = getTokenExpiration(accessToken);
          setCookie('AccessToken', accessToken, {
            maxAge: accessTokenTime,
            secure: true,
          });
          setIsAuthenticated(true);
        } catch (error: unknown) {
          console.error(error);
          setIsAuthenticated(false);
        }
      } else if (accessToken) setIsAuthenticated(true);
      else {
        setIsAuthenticated(false);
        setShowModal(true);
      }
    };
    checkAuthentication();
  }, []);

  const handleLogin = () => {
    setShowModal(false);
    setCookie('redirect', location.pathname, { maxAge: 60 });
    navigate('/login');
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate(-1);
  };

  if (isAuthenticated) return <Outlet />;

  return (
    <>
      {showModal && (
        <LoginModal onCancel={handleCancel} onLogin={handleLogin} />
      )}
    </>
  );
}

export default PrivateRoute;
