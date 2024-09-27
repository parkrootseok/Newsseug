import axios from 'axios';
import { getAccessToken } from 'apis/loginApi';
import {
  getCookie,
  setCookie,
  removeCookie,
  getTokenExpiration,
} from 'utils/stateUtils';

/**
 * IMP : Axios를 사용한 API 호출을 위한 기본 설정.
 * IMP : Content-Type은 JSON으로 설정되어 있습니다. => 다른 형식을 사용하고 싶다면, 직접 사용하는 쪽에서 수정해야 합니다.
 * IMP : Authorization Header를 설정하기 위한 Interceptor가 설정되어 있습니다. ( 고려할 것이 없음 )
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/login`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * IMP : API Interceptor.request => 요청에, Authorization Header를 추가합니다.
 * IMP : AccessToken이 만료되었는지, 확인하고 만료되었다면 ProviderId를 통해 재발급
 */
api.interceptors.request.use(async (config) => {
  let accessToken = getCookie('AccessToken');
  const tokenExpiration = getTokenExpiration(accessToken);
  if (!accessToken || (tokenExpiration && Date.now() >= tokenExpiration)) {
    if (!getCookie('ProviderId')) {
      console.log('비로그인 사용자입니다.');
      return config;
    }
    try {
      const {
        data: {
          data: { accessToken: newAccessToken },
        },
      } = await refreshInstance.get(
        `?providerId=${encodeURIComponent(getCookie('ProviderId'))}`,
      );
      setCookie('AccessTokenBeforeAPI', newAccessToken, {
        maxAge: 900,
        secure: true,
      });
      config.headers.Authorization = newAccessToken;
    } catch (error: unknown) {
      console.error('Error in getting AccessToken', error);
      removeCookie('AccessToken');
      removeCookie('ProviderId');
    }
  } else config.headers.Authorization = accessToken;
  return config;
});

/**
 * IMP : API Interceptor.response => 응답이 401일 경우, AccessToken, ProviderID 재발급을 통해, Login 상태를 유지함.
 */
api.interceptors.response.use(
  (response) => response,
  async (AuthorizationError) => {
    const originalRequest = AuthorizationError.config;
    if (AuthorizationError.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const providerId = getCookie('ProviderId');
      try {
        const token = await getAccessToken(providerId);
        setCookie('AccessToken', token, { maxAge: 900 });
        originalRequest.headers.Authorization = token;
      } catch (RefreshError) {
        console.error('Refresh token is expired, redirecting to login.');
        removeCookie('AccessToken');
        removeCookie('ProviderId');
        window.location.href = '/login';
      }
    } else
      console.log(
        '비로그인 401에러를 제외한 나머지의 에러가 발생하고 있습니다.',
      );
    return Promise.reject(AuthorizationError);
  },
);

export default api;
