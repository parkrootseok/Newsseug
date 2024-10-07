import axios from 'axios';
import { reissueToken } from 'apis/loginApi';
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

/**
 * IMP : API Interceptor.request => 요청 시, AccessToken이 존재할 경우, Header에 추가함.
 */
api.interceptors.request.use((config) => {
  let accessToken = getCookie('AccessToken');
  if (accessToken) {
    const accessTokenTime = getTokenExpiration(accessToken);
    if (accessTokenTime && accessTokenTime > Date.now()) {
      config.headers.Authorization = accessToken;
    }
  }
  return config;
});

/**
 * IMP : API Interceptor.response => 응답이 401일 경우, AccessToken 재발급을 통해, Login 상태를 유지함.
 * IMP : AccessToken 재발급이 실패한 경우, RefreshToken이 만료되었으므로, 로그아웃 처리를 함.
 */
api.interceptors.response.use(
  (response) => response,
  async (AuthorizationError) => {
    const originalRequest = AuthorizationError.config;
    if (AuthorizationError.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const providerId = getCookie('ProviderId');
      try {
        const accessToken = await reissueToken(providerId);
        let accessTokenTime = getTokenExpiration(accessToken);
        setCookie('AccessToken', accessToken, {
          maxAge: accessTokenTime,
          secure: true,
        });
        originalRequest.headers.Authorization = accessToken;
      } catch (RefreshError) {
        console.error('refreshToken is expired, redirecting to login.');
        removeCookie('AccessToken');
        removeCookie('RefreshToken');
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
